import express from "express";
import bodyparser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebRoutes from "./route/web";
import connectDB from './config/connectDB'
require('dotenv').config();

let app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

viewEngine(app);
initwebRoutes(app);

connectDB;

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Backend Nodejs is running on the port : " + port)
})