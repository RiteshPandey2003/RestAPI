const express = require("express");
const mongoose = require("mongoose");
const route = require("./Router/Route")
const {connectMongo} = require("./database/connection.js")
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
const dburl = process.env.dburl;
//connect 
connectMongo(dburl)

//Route
app.use('/', route)

//connect to port
app.listen(PORT, (req,res)=>{
   try {
     console.log(`connect to server`)
   } catch (error) {
     console.log(error)
   }
})