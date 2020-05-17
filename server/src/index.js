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
app.get('/todos', (req, res) =>
  res.json({
    filter: '',
    contents: [
      {
        id: 'todo-1', // required todo-{number}
        title: '오늘 할일', // required {string}
        worker: 'shawn.thecool', // required {string}
        boss: null,
        desc: null,
        createdAt: null, // {date} format YYYY-MM-DD
        updatedAt: null // {date} format YYYY-MM-DD
      },
      {
        id: 'todo-2',
        title: '내일 할일',
        worker: 'merlin.ho',
        boss: null,
        desc: null,
        createdAt: null,
        updatedAt: null
      }
    ],
    page: {}
  })
);
/**
 * server
 */
app.listen(PORT, () => {
  console.log(`server linstening on port ${PORT}`);
});
