import express from "express";
import path from"patth"

import { ENV } from "./lib/env.js";

const app = express();

const __dirname = path.resolve()

app.get("/health",(req, res)=>{
    res.status(200).json({ msg: "api is up and running" });
});

//make our app ready for deployment 

app.listen(ENV.PORT,() => console.log ("server is running on port:",ENV.PORT));
