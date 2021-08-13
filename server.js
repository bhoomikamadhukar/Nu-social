require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api', require('./routes/authRouter'))
app.use('/api', require('./routes/userRoutes'))
app.use('/api', require('./routes/postRouter'))
app.use('/api', require('./routes/commentRouter'))
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
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('ui/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'ui', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("Success. App is running on",port)
})