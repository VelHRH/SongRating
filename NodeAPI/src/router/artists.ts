import express from "express";
import {getAllArtists, getSongsOfArtist} from "../controllers/ArtistController"

export default (router: express.Router) => {
  router.get('/artist/getAll', getAllArtists);
  router.get('/artist/getAll/:artist', getSongsOfArtist);
}

