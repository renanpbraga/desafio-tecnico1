const CODE = require('http-status-codes');
const todoModel = require('../models/todoModel');

const createTodo = async (req, res) => {
  const { todo, todoStatus } = req.body;
  const createdTodo = await todoModel.createTodo({ todo, todoStatus });

  return res.status(CODE.CREATED).json(createdTodo);
};

const getAll = async (req, res) => {
  const allTodos = await todoModel.getAll();
  return res.status(CODE.OK).json(allTodos);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const todo = await todoModel.getById(id);

  return res.status(CODE.OK).json(todo);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo, todoStatus } = req.body;
  const updatedTodo = await todoModel.updateTodo({ todo, todoStatus }, id);
  return res.status(CODE.OK).json(updatedTodo);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await todoModel.deleteTodo({ id });
  return res.status(CODE.OK).json(todo);
};

module.exports = {
  createTodo,
  getAll,
  getById,
  updateTodo,
  deleteTodo,
};
