let { mongoose } = require('./db/mongoose')
let { Todo } = require('./models/todo')
let { User } = require('./models/user')

let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  console.log(req.body)
  let todo = new Todo({
    text: req.body.text
  })
  todo.save().then((result) => {
    res.send(result)
  }, (error) => {
    res.status(400).send(error)
  })
})

app.get('/todos', (req, res) => {

})

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT)
})




/*
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
*/
