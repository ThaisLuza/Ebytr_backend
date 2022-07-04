const express = require('express');
const toDoController = require('../../controllers/toDoController');

const routeList = express.Router();

routeList.get('/', toDoController.getAllTasks);

routeList.post('/', toDoController.createTask);

routeList.get('/:id', toDoController.getTaskById);

routeList.put('/', toDoController.updateTask);

routeList.delete('/', toDoController.deleteTask);

module.exports = routeList;
