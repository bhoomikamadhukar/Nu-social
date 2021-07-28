require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({message:"Hello Nu"})
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Success. App is running on",port)
})