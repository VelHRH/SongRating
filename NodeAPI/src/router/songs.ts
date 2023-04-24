import express from "express";
import { createSong, deleteSong, findById, rateSong, deleteRating, getAll, getOne } from "../controllers/SongController";
import { checkAuth } from "../middlewares";

export default (router: express.Router) => {
  router.get('/songs/findById/:id', findById);
  router.get('/song/getAll', getAll);
  router.get('/song/getOne/:id', getOne);
  router.post('/song/rate/:id', checkAuth, rateSong);
  router.delete('/song/rate/:id', checkAuth, deleteRating);
  router.post('/song/add', checkAuth, createSong);
  router.delete('/song/delete/:id', checkAuth, deleteSong);
}

