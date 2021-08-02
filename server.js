require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())


const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
},error=>{
    if(error) throw error;
    console.log('Connected to mongo')
})

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("Success. App is running on",port)
})