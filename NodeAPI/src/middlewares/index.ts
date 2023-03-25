import express from "express";
import {get, merge} from "lodash";
import { UserModel } from "../models/User";

export const checkAuth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try{
    const sessionToken = req.cookies['COOKIE_AUTH'];

    if (!sessionToken) {
      return res.status(400).json({message: "You are not logged in"});
    }

    const existingUser = await UserModel.findOne({'authentication.sessionToken': sessionToken});

    if (!existingUser) {
      return res.status(400).json({message: "You are not logged in"});
    }

    merge(req.body, {identity: existingUser._id});
    return next();
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "You are not logged in"});
  }

}
