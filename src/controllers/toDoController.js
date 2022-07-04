/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const toDoService = require('../services/toDoService');

const getAllTasks = async (req, res, _next) => {
  try {
    const tasks = await toDoService.getAllTasks();

    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getTaskById = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const task = await toDoService.getTaskById(id);

    return res.status(200).json(task);
  } catch (error) {
    return res.status(404).json({ message: 'Task not found' });
  }
};

const createTask = async (req, res, next) => {
  try {
    const { tarefa } = req.body;

    const newTask = await toDoService.createTask(
      tarefa,
    );

    return res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { tarefa } = req.body;

    const data = { tarefa };
    const newData = await toDoService.updateTask(id, data);

    return res.status(200).json(newData);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    await toDoService.deleteTask(id);
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
