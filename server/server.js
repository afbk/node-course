let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

let Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
})

let newTodo = new Todo({
  text: 'cook dinner',
  completed: true,
  completedAt: 20171217
})

newTodo.save()
  .then((result) => {
    console.log('Saved todo.', result)
  }, (error) => {
    console.log('Unable to save todo.', error)
  })