import express from "express";
import { SongModel } from "../models/Song";

export const createSong = async (req: express.Request, res: express.Response) => {
  try{
    const addedBy = req.body.identity;
    const {name, src, length, author} = req.body;
    if (!name || !src || !length || !author){
      return res.status(400).json({message: "Uncorrect format"});
    }

    const existingSong = await SongModel.findOne({name, author});
    if (existingSong){
      return res.status(400).json({message: "The song already created by you"});
    }

    const doc = new SongModel({
      name,
      src, 
      length,
      author,
      addedBy
    });
    const song = await doc.save();

    return res.json(song).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}

export const deleteSong = async (req: express.Request, res: express.Response) => {
  try{
    const _id = req.params.id;
    const addedBy = req.body.identity;
    const isExist = await SongModel.findOne({_id, addedBy});
    if (!isExist){
      return res.status(400).json({message: "The song does not exist"});
    }
    await SongModel.deleteOne({_id});
    return res.json({message: "success"}).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}

export const findById = async (req: express.Request, res: express.Response) => {
  try{
    const {addedBy} = req.body;
    if (!addedBy){
      return res.status(400).json({message: "Uncorrect format"});
    }
    const songs = await SongModel.find({addedBy});
    return res.json(songs).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}

export const rateSong = async (req: express.Request, res: express.Response) => {
  try{
    const _id = req.params.id;
    const userID = req.body.identity;
    const {star} = req.body;
    if (!star){
      return res.status(400).json({message: "Uncorrect format"});
    }
    const song = await SongModel.findOne({_id});
    if (!song){
      return res.status(400).json({message: "The song does not exist"});
    }
    const isRated = song.ratings.filter((o) => o.userID.toString() === userID.toString()).length > 0;
    if (isRated){
      return res.status(400).json({message: "You have already rated"});
    }
    await SongModel.findOneAndUpdate({_id},{$push: {ratings: {userID, star}}});
    return res.json({message: "success"}).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}

export const changeRating = async (req: express.Request, res: express.Response) => {
  try{
    const _id = req.params.id;
    const userID = req.body.identity;
    const {star} = req.body;
    if (!star){
      return res.status(400).json({message: "Uncorrect format"});
    }
    const song = await SongModel.findOne({_id});
    if (!song){
      return res.status(400).json({message: "The song does not exist"});
    }
    const isRated = song.ratings.filter((o) => o.userID.toString() === userID.toString()).length > 0;
    if (!isRated){
      return res.status(400).json({message: "You have not rated this yet"});
    }
    for (let i =0; i<song.ratings.length; i++){
      if (song.ratings[i].userID.toString() === userID.toString()){
        song.ratings[i].star = star;
      }
    }
    await SongModel.findOneAndUpdate({_id}, song);
    return res.json({message: "success"}).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}