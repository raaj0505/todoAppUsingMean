var express = require('express'),
app = express(),
port = process.env.port || 8080;

mongoose = require('mongoose'),
task = require('./api/models/todoListModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoDB');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.use(function(req,res){
// 	res.status(404).send({url:req.originalUrl + ' not found'})
// })


var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);

console.log("todo list api server started on port: ", port);