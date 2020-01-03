const express= require("express");
const members = require("./members.js")
const router = express.Router();
const path = require("path");
tasks=['I am going to college','i am a guy']
// const Ninja= require('../db_schema.js');
router.get('/',(req,res)=>{
res.render("index",{tasks:tasks})
})
router.post('/add',(req,res)=>{
var task= req.body.tasks;
tasks.push(task)
res.redirect("/")
})

module.exports= router
