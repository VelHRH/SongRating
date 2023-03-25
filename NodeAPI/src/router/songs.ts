import express from "express";
import { createSong, deleteSong, findById, rateSong, changeRating } from "../controllers/SongController";
import { checkAuth } from "../middlewares";

export default (router: express.Router) => {
  router.get('/song/findById', findById);
  router.post('/song/rate/:id', checkAuth, rateSong);
  router.put('/song/rate/:id', checkAuth, changeRating);
  router.post('/song/add', checkAuth, createSong);
  router.delete('/song/delete/:id', checkAuth, deleteSong);
}

