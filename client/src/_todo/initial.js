/**
 * designed state shape
 */
const todo = {
  filter: '',
  contents: [
    // {
    //   id: 'todo-1', // required todo-{number}
    //   title: '', // required {string}
    //   worker: 'shawn.thecool', // required {string}
    //   boss: null,
    //   desc: null,
    //   createdAt: null, // {date} format YYYY-MM-DD
    //   updatedAt: null // {date} format YYYY-MM-DD
    // }
  ],
  page: {
    current: 0,
    total: 0,
    per: 0
  }
};

export default todo;
