import express from "express";
import {register} from "../controllers/UserController"
import {login} from "../controllers/UserController"

export default (router: express.Router) => {
  router.post('/user/register', register);
  router.post('/user/login', login);
}

