'use strict'

module.exports = function(app){

	var todoList = require('../controllers/todoListController');

	app.route('/tasks')
		.get(todoList.listAllTask)
		.post(todoList.createATask);


	app.route('/tasks/:taskId')
		.get(todoList.readATask)
		.put(todoList.updateATask)
		.delete(todoList.deleteATask);


	app.use('*', function(req, res){
		res.sendfile("./public/index.html");
	});

	// app.use(function(req,res){
	// 	res.status(404).send({url:req.originalUrl + ' not found'})
	// })
}