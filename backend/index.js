require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRouter = require('./routers/todoRouter');

const PORT = process.env.PORT || 3000;

const app = express();

const corsSetup = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors(corsSetup));

app.use(bodyParser.json());

app.use('/todo', todoRouter);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
