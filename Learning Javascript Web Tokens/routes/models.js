const mysql = require("mysql")
module.exports=class db{
  constructor(host,user,password,database){
    this.host=host,
    this.user=user,
    this.password=password,
    this.database= database,
    this.conn= mysql.createConnection({
      host:this.host,
      user:this.user,
      password:this.password,
      database:this.database
    },(err)=>{
      if(err) throw err;
      console.log('connected')
    })
  }

}
