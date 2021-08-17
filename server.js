require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const SocketServer = require('./socketServer')
const { ExpressPeerServer } = require('peer')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const http = require('http').createServer(app)
const io = require('socket.io')(http)

const users = []
io.on('connection', socket => {
    SocketServer(socket)
    
})
ExpressPeerServer(http, { path: '/' })


app.use('/api', require('./routes/authRouter'))
app.use('/api', require('./routes/userRoutes'))
app.use('/api', require('./routes/postRouter'))
app.use('/api', require('./routes/commentRouter'))
app.use('/api', require('./routes/notifyRouter'))
app.use('/api', require('./routes/messageRoute'))


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
http.listen(port,()=>{
    console.log("Success. App is running on",port)
})