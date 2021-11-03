const express = require('express');

const {
  getAll,
  getById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

const router = express.Router();

router.get('/:id', getById);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

router.get('/', getAll);

router.post('/', createTodo);

module.exports = router;
