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
  if(err) throw err;

});
}
delete_data(data){
  var sql= "DELETE FROM tasks WHERE id="+data;
this.conn.query(sql,(err)=>{
  if(err) throw err;

});

}
update_data(id,task){
  var sql="UPDATE tasks SET tasks=? WHERE id=?";
  this.conn.query(sql,[task,id],(err)=>{
    if (err) throw err;
  })
}
};
