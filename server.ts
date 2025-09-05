import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())

app.use(bodyParser.json())

app.use(express.urlencoded({extended : true}));


app.get("/", (_req, res) => {
  res.send("Hello from TypeScript + Node.js ");
});

app.listen(3000, () => {
  console.log(`Server running at port 3000`);
});


import usersRouter from "./routes/user.ts";
app.use("/users", usersRouter);