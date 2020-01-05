const mongoose = require("mongoose")
const UserSchema= new mongoose.Schema({
  tasks:{
    type:String,
    required:true
  }
})
const todo= mongoose.model('todo',UserSchema)
module.exports=todo
