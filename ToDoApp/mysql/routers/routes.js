const express= require("express");
const members = require("./members.js")
const router = express.Router();
const path = require("path");
const db = require("./db_schema.js");
const config= require('./config/config.json')
// const db= database.db()
data= JSON.parse(JSON.stringify(config))
// Initializing the db constructor
var mdb= new db(data[0].host,data[0].user,data[0].password,data[0].database)

tasks=['I am going to college','i am a guy']


// router.get('/',(req,res)=>{
//   // var db_tasks= mdb.get_data();
//   // console.log(db_tasks)
//   var sql="SELECT * FROM tasks"
//  mdb.conn.query(sql,(err,result)=>{
//    if (err) throw err;
// var data= JSON.parse(JSON.stringify(result))
// console.log(data)
// });
//
//
// res.render("index",{tasks:tasks})
// });
router.get('/',(req,res)=>{
    var sql="SELECT DISTINCT * FROM tasks"
  mdb.conn.query(sql,(err,result)=>{
if(err) throw err;
var data= JSON.parse(JSON.stringify(result))
res.render("index",{tasks:data})


  })



})
router.post('/add',(req,res)=>{
var task= req.body.tasks;

mdb.insert_data(task)
tasks.push(task)
res.redirect("/")
});
router.get("/delete/:data",(req,res)=>{

  var data=parseInt(req.params.data);
  mdb.delete_data(data)
  res.redirect("/")
})
router.post("/update",(req,res)=>{
  var data= req.body.tasks;
  var id = req.body.id;
  mdb.update_data(id,data);
  res.redirect("/")
})
module.exports= router
