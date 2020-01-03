const mongoose= require("mongoose")
const Schema= mongoose.Schema;


//Creating mongoose schema and model
 const moongoseSchema= new Schema({
   name:{
     type:String,
     required:[true,"Name field is required"]
   },
   rank:{
     type:String,
     required:[true,'Name field is required']
   },
   available:{
     type: Boolean,
     default:false
   }
   //add geo locations

 })


const Ninja = mongoose.model('ninja',moongoseSchema);
module.exports= Ninja;
