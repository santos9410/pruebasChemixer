var mysql = require('mysql');
/*
 * GET users listing.
 */
 exports.login = function(req, res){

  var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'chemixer',
     port: 3306
  });

connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
  var query = connection.query('select * from usuarios where nombreU = ? and password=?',[req.body.User,req.body.Pass], function(error, result){
   if(error){
      throw error;
   }else{
     if(result.length>0)
       {
      res.render("principal","{}");
    }
    else
      {res.send("Usuario no registrado");}
   }
 }
);

connection.end();


};



exports.runQuery = function(Query,data,callback){


      var dbConfig = {
          host:'localhost',
          user:'root',
          password:'',
          database:'chemixer'
      };

      var connection = mysql.createConnection(dbConfig);
      //console.log(Query);
      connection.connect(function(err) {
                if (err) throw console.log(err);
       
      });
    


        connection.query(Query,data, function(error, result){
            if (error) {
             // throw console.log(error);
              callback(error,false);
            

            }
              else{
                    callback(error,result);
              }

            
    });


      connection.end();
}

