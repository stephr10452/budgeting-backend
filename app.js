const express = require("express")
const transactionsContr = require("./controller/transactionController.js")
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Your Budget App<h1>")
})

app.use("/transactions",transactionsContr);

module.exports = app;