const connection = require("./connection");

const getAllTasks = async () => {
  const query = "SELECT * FROM Ebytr.list ORDER BY id";
  const [products] = await connection.execute(query);

  return products;
};

const getTaskById = async (id) => {
  const query = "SELECT * FROM Ebytr.list WHERE id=?";
  const [task] = await connection.execute(query, [id]);

  if (task.length === 0) return null;

  return task[0];
};

const createTask = async (tarefa) => {
  const query = "INSERT INTO Ebytr.list (tarefa) VALUES (?)";
  const [newId] = await connection.execute(query, [tarefa]);

  const newTask = {
    id: newId.insertId,
    tarefa,
  };

  return newTask;
};

const updateTask = async (id, { tarefa }) => {
  const query = "UPDATE Ebytr.list SET tarefa = ? WHERE id = ?";
  const newData = await connection.execute(query, [tarefa, id]);

  if (newData.length === 0) return null;

  return {
    id,
    tarefa,
  };
};

const deleteTask = async (id) => {
  await connection.execute("DELETE FROM Ebytr.list WHERE id = ?", [id]);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
