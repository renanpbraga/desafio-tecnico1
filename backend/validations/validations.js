const Joi = require('joi');
const { ObjectId } = require('mongodb');
const CODE = require('http-status-codes');
const { getById } = require('../models/todoModel');

const todoValidations = (todo, statusTodo) => {
  const { error } = Joi.object(
    {
      todo: Joi.string().required().not().empty(),
      statusTodo: Joi.string().required().not().empty(),
    },
  ).validate({ todo, statusTodo });
  if (error) {
    return {
      message: error.details[0].message,
      code: CODE.UNPROCESSABLE_ENTITY,
    };
  }

  return true;
};

const todoIdValidation = async ({ id }) => {
  if (!ObjectId.isValid(id)) {
    return {
      message: 'invalid id',
      code: CODE.NOT_FOUND,
    };
  }

  const existtodo = await getById({ id });

  if (!existtodo) {
    return {
      message: 'this todo not exist',
      code: CODE.NOT_FOUND,
    };
  }

  return true;
};

module.exports = { todoValidations, todoIdValidation };
