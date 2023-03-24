import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import mongoose from "mongoose"
import { config } from "dotenv"
import * as UserController from "./controllers/UserController"
import router from "./router/index"

config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB OK"))
.catch((err: Error) => console.log("DB Error", err))

const app = express();

app.use(cors({
  credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(4444, () => {
  console.log("Server OK");
})

app.use('/', router());