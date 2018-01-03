const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')
let id = "5a4cde7f51914b0b212d699611" //6


User.findOne({})

if (!ObjectID.isValid(id)) {
  return console.log('ID is not valid')
}

User.findById(id).then(
  result => {
    console.log(result)
  })
/*

Todo.find({
  _id: id
}).then(
  todos => {
    console.log('Todos: ', todos)
  })

Todo.findOne({
  _id: id
}).then(
  result => {
    console.log('Todo: ', result)
  })

Todo.findById(id).then(
  todo => {
    if (!todo) {
      return console.log('No ID found')
    }
    console.log('Todo by ID: ', todo)
  }).catch(
  error => {
    console.log('')
  })
*/
