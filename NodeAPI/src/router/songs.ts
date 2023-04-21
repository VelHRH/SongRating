import express from "express";
import { createSong, deleteSong, findById, rateSong, changeRating, getAll } from "../controllers/SongController";
import { checkAuth } from "../middlewares";

export default (router: express.Router) => {
  router.get('/songs/findById/:id', findById);
  router.get('/song/getAll', getAll);
  router.post('/song/rate/:id', checkAuth, rateSong);
  router.put('/song/rate/:id', checkAuth, changeRating);
  router.post('/song/add', checkAuth, createSong);
  router.delete('/song/delete/:id', checkAuth, deleteSong);
}

