const express = require('express');

const metaData = require("./metadata.json");

const app = express();

app.get("/",(req,res) => {
    res.send(metaData)
})

app.get("/:id" , (req,res) => {
let {id} = req.params
const ip = metaData.filter(data => data.id == id)
res.send(ip)

console.log(ip)
})

app.listen(3000, console.log("Its running"))