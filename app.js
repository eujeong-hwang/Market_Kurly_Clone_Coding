const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const connect = require("./schemas");
connect();

const cartsRouter = require('./routes/cart')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

app.use("/api", cartsRouter);

const handleListen = () => {
  console.log(`서버가 요청을 받을 준비가 됐어요😀 http://localhost:3000`);
};

app.listen(PORT, handleListen);