import express from "express";
import {getAllUsers, getOneUser} from "../controllers/UserController"
import { checkAuth } from "../middlewares";

export default (router: express.Router) => {
  router.get('/user/getAll', getAllUsers);
  router.get('/user/:id', checkAuth, getOneUser);
}

