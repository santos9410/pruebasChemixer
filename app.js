
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//principal
app.get('/', routes.index);
app.post('/admin', user.login);


//usuarios
app.get('/Admin/Usuarios',routes.AdminUsuarios);
app.post('/admin/Usuarios/buscar',routes.BuscarUsuario);

//elementos

app.get('/admin/Elementos',routes.adminElementos);
app.get('/Admin/Elementos/Agregar',routes.ElementosAgregar);
app.get('/Admin/Elementos/Buscar',routes.ElementosBuscar);

app.post('/admin/elementos/AgregarNuevo',routes.ElementoNuevoAgregar);
app.post('/admin/elementos/BuscarElem',routes.BuscarElemento);

//combinaciones
app.get('/Admin/Combinaciones',routes.AdminCombinaciones);
app.get('/Admin/Combinaciones/Agregar',routes.CombinacionesAgregar);
app.get('/Admin/Combinaciones/Buscar',routes.CombinacionesBuscar);
app.get('/Admin/Combinaciones/Eliminar',routes.CombinacionesEliminar);


app.post('/admin/Combinaciones/AgregarNuevo',routes.CombinacionesNuevoAgregar);
app.post('/admin/Combinaciones/buscarcombinacion',routes.BuscarCombinacion);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Iniciando aplicacion en el puerto:  ' + app.get('port'));
});
