const CODE = require('http-status-codes');
const todoModel = require('../models/todoModel');
const todoService = require('../services/todoService');

const createTodo = async (req, res) => {
  const { todo, statusTodo } = req.body;

  const todos = await todoService.createTodo({ todo, statusTodo });

  if (todos.message) {
    return res.status(todos.code).json({
      message: todos.message,
    });
  }

  return res.status(CODE.CREATED).json(todos);
};

const getAll = async (_req, res) => {
  const todos = await todoModel.getAll();
  return res.status(CODE.OK).json(todos);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const todos = await todoService.getById({ id });

  if (todos.message) {
    return res.status(todos.code).json({
      message: todos.message,
    });
  }

  return res.status(CODE.OK).json(todos);
};

const updateTodo = async (req, res) => {
  const { todo, statusTodo } = req.body;
  const { id } = req.params;

  const todoId = await todoService.updateTodo({ todo, statusTodo }, id);
  if (todoId.message) {
    return res.status(todoId.code).json({
      message: todoId.message,
    });
  }
  return res.status(CODE.OK).json({ _id: id, todo, statusTodo });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const deletedTodo = await todoService.deleteTodo({ id });

  if (deletedTodo.message) {
    return res.status(deletedTodo.code).json({
      message: deletedTodo.message,
    });
  }

  return res.status(CODE.OK).json({
    message: 'ToDo deletado com sucesso!',
  });
};

module.exports = {
  createTodo,
  getAll,
  getById,
  updateTodo,
  deleteTodo,
};
