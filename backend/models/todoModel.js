const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const getAll = async () => {
  const db = await connection();
  const todo = await db.collection('todo').find().toArray();
  return todo;
};

const getById = async (id) => {
  const db = await connection();
  const todo = await db.collection('todo').findOne({ _id: ObjectId(id) });
  return todo;
};

const createTodo = async ({ todo, todoStatus }) => {
  const db = await connection();
  const createdTodo = await db.collection('todo').insertOne({ todo, todoStatus, creationDate: new Date() });
  return createdTodo;
};

const updateTodo = async ({ todo, todoStatus }, id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  await db.collection('todos').updateOne({ _id: ObjectId(id) },
    {
      $set: { todo, todoStatus },
    });

  return {
    todo,
    todoStatus,
    id,
  };
};

const deleteTodo = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.colletion('todos').deleteOne({ _id: ObjectId(id) });
  return id;
};

module.exports = {
  getAll,
  getById,
  createTodo,
  updateTodo,
  deleteTodo,
};
