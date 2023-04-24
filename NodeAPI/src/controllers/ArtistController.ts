import express from "express";
import { SongModel } from "../models/Song";

export const getAllArtists = async (req: express.Request, res: express.Response) => {
  try{
    const songs = await SongModel.find();
    let artists = [] as any[];
    for (let i=0; i<songs.length; i++){
      for (let j=0; j < songs[i].author.length; j++){
        if (!artists.includes(songs[i].author[j])){
          artists.push(songs[i].author[j]);
        }
      }
    }
    return res.json({artists}).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}

export const getSongsOfArtist = async (req: express.Request, res: express.Response) => {
  try{
    const artist = req.params.artist;
    const allSongs = await SongModel.find();
    const songs = [] as any[];
    for (let i=0; i < allSongs.length; i++){
      if (allSongs[i].author.includes(artist)) songs.push(allSongs[i])
    }
    return res.json({songs}).end();
  } catch (err){
    console.log(err);
    return res.status(500).json({message: "Error with creation"});
  }
}