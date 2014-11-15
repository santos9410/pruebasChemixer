
/*
 * GET home page.
 */
var BD =require('./user.js');
//principal 
exports.index = function(req, res){
  res.render('index', { title: 'CheMixer' });
};


//usuarios

exports.AdminUsuarios = function(req, res)
{
  res.render('AdminUsuarios');
}
exports.BuscarUsuario=function(req,res){

var nombreU = req.body.nombreU;
console.log(nombreU);
var Stringquery="SELECT * FROM usuarios where nombreU=?";
                  // connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,row
                  BD.runQuery(Stringquery,nombreU,function(error,data){
                  console.log(data);
                  
                  });


};






//elementos

exports.adminElementos = function(req, res){
  res.render('adminElemtos', { title: 'Chemixer' });
};

exports.ElementosAgregar = function(req, res){
res.render('ElementosAgregar', { title: 'Chemixer' });
  };


exports.ElementoNuevoAgregar = function(req, res){
  var no=req.body.nombreElem;
  var img=req.body.imagen;
  var des=req.body .descr;

  var data=[no,img,des];

  var query="INSERT INTO componentes(nombreC,imagen,descr) VALUES(?, ?, ?)";
        BD.runQuery(query,data, function(call,result){
            console.log(result);
            if(call==false){

            }
            else{
              res.render('adminElemtos', { title: 'Chemixer' });
            }
});
};


exports.ElementosBuscar = function(req, res){
  res.render('ElementosBuscar', { title: 'Chemixer' });
};


exports.BuscarElemento=function(req,res){

var nombreC = req.body.buscarNombre;
console.log(nombreC);
var Stringquery="SELECT * FROM componentes where nombreC=?";
                  // connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,row
                  BD.runQuery(Stringquery,nombreC,function(error,data){
                  console.log(data);
                
                  });


};




//combinaciones

exports.AdminCombinaciones = function(req, res){
  res.render('AdminCombinaciones',{ });

};



exports.CombinacionesAgregar = function(req,res)
{
  res.render('CombinacionesAgregar');

};

exports.CombinacionesNuevoAgregar = function(req, res){
  var combo=req.body.comboArray;
  var idElemRes=req.body.idElemRes;


  var data=[combo,idElemRes];

  var query="INSERT INTO combinaciones(combArray,idElemRes) VALUES(?, ?)";
        BD.runQuery(query,data, function(call,result){
            console.log(result);
            if(call==false){

              
            }
            else{
              res.render('AdminCombinaciones', { title: 'Chemixer' });
            }

        });
};



exports.CombinacionesBuscar = function(req,res)
{
  res.render('CombinacionesBuscar');
};

exports.BuscarCombinacion=function(req,res){

var id = req.body.buscarid;
console.log(id);
var Stringquery="SELECT * FROM combinaciones where idComb=?";
               
                  BD.runQuery(Stringquery,id,function(error,data){
                  console.log(data);
                  
                  });


}


exports.CombinacionesEliminar = function(req,res)
{
  res.render('CombinacionesEliminar')
};


exports.CombinacionesBuscar = function(req,res)
{
  res.render('CombinacionesBuscar');
};


