import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js"


import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


dotenv.config();


//Middlewares ---------------------------------
//processa  os dados requisitados do req.body
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))


app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"))
})
//---------------------------------------------




// app.get("/", (req, res) =>{
//     res.send("Hello World!");
// })


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server está rodando na porta ${PORT}`);
});