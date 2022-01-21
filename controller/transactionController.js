const express = require("express")
const transactionRoute = express.Router()
const data = require("../models/data.js")

transactionRoute.get("/",(req,res)=>{
    res.json(data) 
  });

transactionRoute.get("/:index",(req,res)=>{
      const {index} = req.params;
      if(data[index]){
          res.json(data[index]);
      }else {
          res.status(404).json({error: "No transactions found!"})
      }
  });

transactionRoute.post("/",(req,res)=>{
    data.push(req.body)
    res.json(data[data.length-1]);
})

transactionRoute.delete("/:index",(req,res)=>{
const {index} = req.params
if(data[index]){
const remove = data.splice(index,1);
res.json(remove[0]);
}else {
    res.status(404).json({error:"Not found"})
}

})

transactionRoute.put("/:index", (req, res)=>{
    let { index } = req.params;

    if(!data[index]){
        res.status(422).json({
            error: "Not found"
        })
        return;
    }

    let { date, name, amount, from } = req.body;
    if(date && name && amount !== undefined && from){
        data[index] = {
            date, name, amount, from
        };
        res.json(data[index]);
    } else {
        res.status(422).json({
            error: "Please provide all fields"
        })
    }
})






  module.exports = transactionRoute