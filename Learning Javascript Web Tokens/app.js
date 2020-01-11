const express=require('express')
const routers=require('./routes/routes.js')
const bodyparser= require("body-parser")
const app= express();
app.use(routers)
app.use(bodyparser.urlencoded({extended:false}))
app.set('view engine','ejs')
app.listen(5000,()=>console.log("server is running at port 5000"))
