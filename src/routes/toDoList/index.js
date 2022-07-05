const express = require('express');
const toDoController = require('../../controllers/toDoController');

const routeList = express.Router();

routeList.get('/', toDoController.getAllTasks);

routeList.post('/', toDoController.createTask);

routeList.get('/:id', toDoController.getTaskById);

routeList.put('/:id', toDoController.updateTask);

routeList.delete('/:id', toDoController.deleteTask);

module.exports = routeList;
