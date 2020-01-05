const express= require("express");
const members = require("./members.js")
const router = express.Router();
const path = require("path");
const todo= require("../model/db_schema.js");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
dotenv.config()

 mongoose.set("useFindAndModify", false);
 mongoose.connect(process.env.DB_CONNECT,  { useNewUrlParser: true }, () =>
 {
   console.log("Connected to db!")
 });

router.get('/',(req,res)=>{
  todo.find({},(err,tasks)=>{

    res.render("index",{tasks:tasks})
  })
})
router.post('/add',(req,res)=>{

const Todo= new todo(req.body)
Todo.save()

res.redirect("/")

});

module.exports= router
