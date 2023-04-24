import express from "express";
import authentication from "./authentication";
import users from "./users";
import songs from "./songs";
import artists from "./artists";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  songs(router);
  artists(router);
  return router;
}