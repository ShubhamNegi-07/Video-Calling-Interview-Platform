import express from "express";

const app = express();

app.get("/",(req, res)=>{
    res.status(200).json({ msg: "success from backend" });
})