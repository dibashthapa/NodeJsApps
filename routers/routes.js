const express= require("express");
const members = require("./members.js")
const router = express.Router();
const path = require("path");
const Ninja= require('../db_schema.js');
router.get('/',(req,res)=>{
  res.render("index");

})
router.post('/add',(req,res)=>{
// var ninja = new Ninja(req.body);
// ninja.save();
Ninja.create(req.body).then(function(ninja){
  res.send(ninja)
})
})

module.exports= router
