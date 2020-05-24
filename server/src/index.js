const express = require('express');
const cors = require('cors');
const app = express();
/**
 * constants
 */
const PORT = 4000;
/**
 * middleware
 */
app.use(cors());
/**
 * router
 */
app.use('/api/v1/todos', require('./api/v1/todos'));
/**
 * server
 */
app.listen(PORT, () => {
  console.log(`server linstening on port ${PORT}`);
});
