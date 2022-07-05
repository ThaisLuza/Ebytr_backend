const toDoModel = require('../models/toDoModel');
const { erroHandler } = require('../erroHandler');

const getAllTasks = async () => {
  const tasks = await toDoModel.getAllTasks();

  return tasks;
};

const getTaskById = async (id) => {
  const task = await toDoModel.getTaskById(id);

  if (!task) throw erroHandler(404, 'Task not found');

  return task;
};

const createTask = async (tarefa, status) => {
  // const verifyProduct = await productModel.getProductByCodigo(codigo);

  // if (verifyProduct) throw erroHandler(409, "Product already exists");

  const newTask = await toDoModel.createTask(
    tarefa,
    status,
  );

  return newTask;
};

const updateTask = async (id, data) => {
  const verifyId = await toDoModel.getTaskById(id);

  if (!verifyId) throw erroHandler(404, 'Task not found');

  const newData = await toDoModel.updateTask(id, data);

  return newData;
};

const deleteTask = async (id) => {
  const verifyId = await toDoModel.getTaskById(id);

  if (!verifyId) throw erroHandler(404, 'Task not found');

  await toDoModel.deleteTask(id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
