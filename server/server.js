let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

let newTodo = new Todo({
  text: 'cook dinner',
  completed: true,
  completedAt: 20171217
})

let newUser = new User({
  email: 'anderskraneled@gmail.com'
})

newUser.save().then((result) => {
  console.log('Success', result)
}, (error) => {
  console.log('Error', error)
})
