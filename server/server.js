// server/server.js
const express = require('express');
const cors = require('cors');
const gemini = require('./gemini');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  const response = await gemini.askLayla(message);
  res.json({ reply: response });
});

app.listen(3000, () => console.log('Layla is listening on http://localhost:3000'));