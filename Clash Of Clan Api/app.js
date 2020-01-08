const express = require('express')
const bodyparser = require("body-parser")

const routes= require("./routers/routes.js")
const app= express()
app.use(bodyparser.urlencoded({extended : false }))
app.set('view engine','ejs')
app.use(routes)
app.use(express.static("public"))
app.listen(3000,()=>{
  console.log("server is running")
})
