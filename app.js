const express = require('express')
const bodyparser = require('body-parser')
const mongoose=require("mongoose")
const app= express();

const routes= require("./routers/routes.js");
mongoose.connect('mongodb://localhost/Users',(err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("suceess")
  }
});
mongoose.Promise= global.Promise;
app.use(bodyparser.urlencoded({extended : false }))

app.set('view engine','ejs')
app.use(routes)
app.listen(3000,()=>{
  console.log("server is running")
})
