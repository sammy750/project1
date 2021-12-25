const express = require('express');
const axios = require("axios");
const userData = require("./user.json");

const app = express();

app.get("/",(req,res) => {
    res.send(userData)
})

app.get("/:id" , async (req,res) => {


let id = req.params.id
const ip = userData.filter(data => data.id == id)
const fetch =  await axios({method:"GET",url:`http://localhost:3000/${id}`})


const address = await fetch.data

console.log(`http://localhost:3000/:${id}`)
console.log(fetch.data)

res.send({ip , address})

})

app.listen(8000, console.log("Its running"))