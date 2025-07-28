const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({//Schema is keyword
    task:{
        type : String,
        required: true
    }
    
})

module.exports=mongoose.model("tasks",taskSchema)