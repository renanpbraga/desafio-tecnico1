require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

const corsSetup = {
  origin: `http://localhost:${PORT}`,
};

app.use(cors(corsSetup));

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
