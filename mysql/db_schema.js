// // const mongoose= require("mongoose")
// // const Schema= mongoose.Schema;
// //
// //
// // //Creating mongoose schema and model
// //  const moongoseSchema= new Schema({
// //    name:{
// //      type:String,
// //      required:[true,"Name field is required"]
// //    },
// //    rank:{
// //      type:String,
// //      required:[true,'Name field is required']
// //    },
// //    available:{
// //      type: Boolean,
// //      default:false
// //    }
// //    //add geo locations
// //
// //  })
// //
// //
// // const Ninja = mongoose.model('ninja',moongoseSchema);
// // module.exports= Ninja;
//
//
// const mysql= require("mysql");
// var conn= mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'88645684',
//   database:'API'
// })
//
// conn.connect(function(err){
// // if (err) throw err;
// // console.log("connected");
// // var sql="SELECT * FROM meme";
// // conn.query(sql,function(err,result){
// //   if (err) throw err;
// // console.log(result)
// // })
// const insert=function(data){
//   var sql="INSERT INTO Tasks(tasks) VALUES(data)";
//   conn.query(sql)
//
// }
// })
// export {insert}
