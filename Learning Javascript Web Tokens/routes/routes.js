const express= require("express")
const routes= express.Router()
const jwt = require("jsonwebtoken")
const url = require("url")
const db = require('./models.js')
const data= require("./config.json")
var mdb = new db(data[0].host,data[0].user,data[0].password,data[0].database)
routes.get("/",(req,res)=>
{
  var token = req.param("query")


  res.render("index",{token:token})

}
)
routes.post("/login",(req,res)=>{
  mdb.conn.query("SELECT DISTINCT url FROM meme",(err,result)=>{
    if (err) throw err;
    const data = JSON.parse(JSON.stringify(result))
    jwt.sign({user:data},'secretkey',(err,token)=>{

      res.redirect("/?query="+token)

    })
  })


})
routes.get("/data",verifyToken,(req,res)=>{
  jwt.verify(req.token,'secretkey',(err,authData)=>{
    if(err){
      res.sendStatus(403)

    }
    else{
      res.json({
        "message":"post created",
        "authData":authData
      })
    }
  })

})

function verifyToken(req,res,next){
  const bearerHeader= req.headers['authorization'];
  if(typeof bearerHeader!=='undefined'){

    bearerToken = bearerHeader.split(" ")
    req.token= bearerToken[1];
    next()
  }
  else{
    res.json({"message":"Sorry! You aren't authorized"})
  }
}

module.exports= routes
