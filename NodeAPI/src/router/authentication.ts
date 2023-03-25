import express from "express";
import {register, changePassword, login} from "../controllers/UserController";
import { checkAuth } from "../middlewares";

export default (router: express.Router) => {
  router.post('/user/register', register);
  router.put('/user/changePassword', checkAuth, changePassword);
  router.post('/user/login', login);
}

