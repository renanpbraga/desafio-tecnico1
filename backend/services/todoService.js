const todoModel = require('../models/todoModel');

const { todoValidations, todoIdValidation } = require('../validations/validations');

const createTodo = async ({ todo, statusTodo }) => {
  const validations = todoValidations(todo, statusTodo);

  if (validations.message) {
    return {
      message: validations.message,
      code: validations.code,
    };
  }
  const createdTodo = await todoModel.createTodo({ todo, statusTodo });
  return createdTodo;
};

const getById = async ({ id }) => {
  const validateId = await todoIdValidation({ id });

  if (validateId.message) {
    return {
      message: validateId.message,
      code: validateId.code,
    };
  }

  const todo = await todoModel.getById({ id });
  return todo;
};

const updateTodo = async ({ todo, statusTodo }, id) => {
  const validateId = await todoIdValidation({ id });

  if (validateId.message) {
    return {
      message: validateId.message,
      code: validateId.code,
    };
  }

  const validations = todoValidations(todo, statusTodo);

  if (validations.message) {
    return {
      message: validations.message,
      code: validations.code,
    };
  }

  await todoModel.updateTodo({ todo, statusTodo }, id);
  return { _id: id, todo, statusTodo };
};

const deleteTodo = async ({ id }) => {
  const validateId = await todoIdValidation({ id });

  if (validateId.message) {
    return {
      message: validateId.message,
      code: validateId.code,
    };
  }

  return deleteTodo({ id });
};

module.exports = {
  createTodo,
  getById,
  updateTodo,
  deleteTodo,
};
