const { connection } = require('./connection');

const getAll = async () => {
  const db = await connection();
  const todo = await db.collection('todo').find().toArray();
  return todo;
};

module.exports = {
  getAll,
};
