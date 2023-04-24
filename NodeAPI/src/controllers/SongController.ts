// @ts-nocheck

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
    const addedBy = req.params.id;
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

export const getOne = async (req: express.Request, res: express.Response) => {
  try{
    const _id = req.params.id;
    const song = await SongModel.findOne({_id});
    return res.json(song).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}

const findAvg = (arr: {userID: string, star: number}[]) =>{
  let avg=0;
  for (let i=0; i<arr.length; i++){
    avg+=arr[i].star;
  }
  return avg/arr.length;
}

export const getAll = async (req: express.Request, res: express.Response) => {
  try{
    const songs = await SongModel.find();
    for (let i = 0; i < songs.length; i++) {
      songs[i] = {...songs[i]._doc, avg: findAvg(songs[i].ratings)};
    }
    for (let i = 0; i < songs.length; i++) {
      for (let j=i+1; j<songs.length; j++){
        if (songs[j].avg > songs[i].avg){
          const t = songs[j];
          songs[j] = songs[i];
          songs[i] = t;
        }
      }
    }
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

export const deleteRating = async (req: express.Request, res: express.Response) => {
  try{
    const _id = req.params.id;
    const userID = req.body.identity;
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
        song.ratings.splice(i, 1);
      }
    }
    await SongModel.findOneAndUpdate({_id}, song);
    return res.json({message: "success"}).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}