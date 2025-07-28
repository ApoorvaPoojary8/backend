const express = require("express")
const router = require("../routes/route")// Importing the router from routes

const cors = require("cors")
const app = express()
app.use(cors())
app.use('/api/tasks',router)

app.use(express.json())//T
require('dotenv').config()
const port = process.env.PORT || 3004

// Loading
const connectDB = require('../connect/connect')


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
    console.log("Working")
})

    }
    catch(error){
        console.log("db is not connected")

    }
}

start()
