exports.connect = function(callback){
    return new DBContext(callback);
};
var DBContext=function(cbk)
{
     var MongoClient = require('mongodb').MongoClient;
     MongoClient.connect("mongodb://127.0.0.1:27017/test", function(err, db) {
    if(!err) {
        console.log("Connected to database");
        cbk(db);
      }else{
          console.log(err);
     }
    });
};