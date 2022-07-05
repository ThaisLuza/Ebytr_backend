const connection = require('./connection');

const getAllTasks = async () => {
  const query = 'SELECT * FROM Ebytr.list ORDER BY id';
  const [products] = await connection.execute(query);

  return products;
};

const getTaskById = async (id) => {
  const query = 'SELECT * FROM Ebytr.list WHERE id=?';
  const [task] = await connection.execute(query, [id]);

  if (task.length === 0) return null;

  return task[0];
};

const createTask = async (tarefa, status) => {
  const query = 'INSERT INTO Ebytr.list (tarefa, status) VALUES (?, ?)';
  const [newId] = await connection.execute(query, [tarefa, status]);

  const newTask = {
    id: newId.insertId,
    tarefa,
    status,
  };

  return newTask;
};

const updateTask = async (id, { tarefa, status }) => {
  const query = 'UPDATE Ebytr.list SET tarefa = ?, status = ? WHERE id = ?';
  const newData = await connection.execute(query, [tarefa, status, id]);

  if (newData.length === 0) return null;

  return {
    id,
    tarefa,
    status,
  };
};

const deleteTask = async (id) => {
  await connection.execute('DELETE FROM Ebytr.list WHERE id = ?', [id]);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
