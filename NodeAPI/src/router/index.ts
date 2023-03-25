import express from "express";
import authentication from "./authentication";
import users from "./users";
import songs from "./songs";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  songs(router);
  return router;
}