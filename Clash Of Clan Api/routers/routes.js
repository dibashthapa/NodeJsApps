
const express= require("express");
const request = require("request");
const config= require("../config.json");
const routes = express.Router();
const path=require("path")
routes.get("/",(req,res)=>{
  res.render("index")
})

routes.get("/add",(req,res)=>{
  if(req.param("playerTag")){
    var playerTag=req.param("playerTag")
// var clanTag="#CGL98LLV"
      // var playerTag="%239G92U80LY"

      var data=JSON.parse(JSON.stringify(config))

      request.get("https://api.clashofclans.com/v1/players/"+"%23"+playerTag,{
        'auth':
        {
          'bearer':data[0].token
        }
      },(err,response,body)=>{

        res.json(JSON.parse(body))
      })

  }
  else{
    var clantag=req.param("clanTag")
    var data=JSON.parse(JSON.stringify(config))

    request.get("https://api.clashofclans.com/v1/clans/"+"%23"+clantag,{
      'auth':
      {
        'bearer':data[0].token
      }
    },(err,response,body)=>{

      res.json(JSON.parse(body))
    })
  }
})

module.exports= routes
