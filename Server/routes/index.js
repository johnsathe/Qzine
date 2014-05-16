exports.index = function(req, res){
  
  res.render('index', { title: 'Qzine' });
};
function OnDBConnected()
{
    console.log("wow");
};
exports.auth=function(req,res)
{
    var uname,conce,passhash;
    uname=req.params.uname;
    conce=req.params.conce;
    passhash=req.params.passhash;

    var qzineDB=require('../qzine/db').connect(function(db){
        var userColl = db.collection('Users');

        userColl.find({User_EmailID:uname}).toArray(function(err, items) {
           
       });
    });

    res.setHeader('content-type', 'text/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.send("Auth processing");
};
exports.authinit=function(req,res)
{
    var uname,nonce;
    nonce=guid();
    uname=req.params.uname;

    var qzineDB=require('../qzine/db').connect(function(db){
       var userColl = db.collection('Users');
       userColl.update({User_EmailID:uname}, {$set:{User_Nonce:nonce}}, {w:1}, function(err, result) {});
       /*
       userColl.find({User_EmailID:uname}).toArray(function(err, items) {
           console.log(items);
       });
       */
        
    });
    res.setHeader('content-type', 'text/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    var repObj={
        nonce:nonce
        };
    res.send(repObj);
};
var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();