const mysql = require("mysql");
module.exports=  class db {
    constructor(host,user,password,database){
this.host= host,
this.user= user,
this.password= password,
this.database= database
this.conn= mysql.createConnection({
  host:this.host,
  user:this.user,
  password:this.password,
  database:this.database
},(err)=>{
  if(!err){
    console.log("connected!")
  }
  else{
    console.log("disconnected! error")
  }
})
};
insert_data(data){
  var sql= "INSERT INTO tasks(tasks) VALUES (?)";
this.conn.query(sql,[data],(err)=>{
  if(err) throw err

})
}


get_data(){
  var sql="SELECT * FROM tasks"
 this.conn.query(sql,(err,result)=>{
   if (err) throw err;
var data= JSON.parse(JSON.stringify(result))
return data
 })

  }

  }
