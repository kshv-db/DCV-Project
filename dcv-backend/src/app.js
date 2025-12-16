require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/vault', require('./routes/vault'));
app.use('/share', require('./routes/share'));

module.exports = app;
