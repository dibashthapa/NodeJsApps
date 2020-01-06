
const express= require("express");
const request = require("request");
const config= require("../config.json");
const routes = express.Router();
routes.get("/",(req,res)=>{
  res.json({
    message:"Routes created"
  })
})
routes.get("/api",(req,res)=>{
  var playerTag="%239G92U80LY"
  var data=JSON.parse(JSON.stringify(config))

request.get("https://api.clashofclans.com/v1/players/"+playerTag,{
  'auth':
{
  'bearer':data[0].token
}
},(err,response,body)=>{

res.json(JSON.parse(body))
})
});
module.exports= routes
