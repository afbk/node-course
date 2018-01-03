let { mongoose } = require('./db/mongoose')
let { Todo } = require('./models/todo')
let { User } = require('./models/user')

let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
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
  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }, (error) => {
    res.status(400).send(error)
  })
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT)
})

module.exports = {
  app
}
