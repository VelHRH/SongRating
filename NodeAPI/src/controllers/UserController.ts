import { UserModel } from "../models/User";
import express from "express";
import { random, authentication } from "../helpers/index";

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Unable to get users"});
  }
}

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const {email, password, login} = req.body;
    if (!email || !password || !login){
      return res.status(400).json({message: "Uncorrect format"});
    }

    const existingUser = await UserModel.findOne({email: email});
    if (existingUser){
      return res.status(400).json({message: "Email already registered"});
    }

    const salt = random();
    const doc = new UserModel({
      email,
      login,
      authentication:{
        salt,
        password: authentication(salt, password)
      }
    })
    const user = await doc.save();

    return res.json(user).end();
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Unable to register"});
  }
}


export const login = async (req: express.Request, res: express.Response) => {
  try {
    const {email, password} = req.body;
    if (!email || !password){
      return res.status(400).json({message: "Uncorrect format"});
    }

    const user = await UserModel.findOne({email: email}).select('+authentication.salt +authentication.password');

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash){
      return res.status(403).json({message: "Uncorrect email or password"});
    }

    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());
    await user.save();

    res.cookie('COOKIE_AUTH', user.authentication.sessionToken, {domain: 'localhost', path: '/'});

    return res.json(user).end();
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Unable to login"});
  }
}


export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await UserModel.find();
    return res.json(users).end();
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Unable to open users"});
  }
}


export const getOneUser = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findOne({_id: id});
    return res.json(user).end();
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Unable to open users"});
  }
}

export const changePassword = async (req: express.Request, res: express.Response) => {
  try {
    const userID = req.body.identity;
    const {oldPassword, newPassword} = req.body;
    if (!oldPassword || !newPassword){
      return res.status(400).json({message: "Uncorrect format"});
    }

    const currUser = await UserModel.findOne({_id: userID}).select('+authentication.salt +authentication.password');;
    
    if (authentication(currUser.authentication.salt, oldPassword) !== currUser.authentication.password){
      return res.status(400).json({message: "Not correct old password"});
    }

    await UserModel.findOneAndUpdate({_id: userID}, {'authentication.password': authentication(currUser.authentication.salt, newPassword)});

    return res.json({message: "success"}).end();
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Unable to register"});
  }
}