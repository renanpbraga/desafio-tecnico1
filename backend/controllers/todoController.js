const CODE = require('http-status-codes');
const todoModel = require('../models/todoModel');

const createTodo = async (req, res) => {
  const { todo, todoStatus } = req.body;
  const createdTodo = await createTodo({ todo, todoStatus });

  return res.status(CODE.CREATED).json(createdTodo);
};

module.exports = {
  createTodo,
};
