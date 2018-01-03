let request = require('supertest')
let expect = require('expect')

let { app } = require('../server')
let { Todo } = require('../models/todo')

const todos = [{
    text: 'first test todo'
},
  {
    text: 'second test todo'
}]

beforeEach((done) => {
  Todo.remove({})
    .then(() => Todo.insertMany(todos))
    .then(() => done())
})

describe('GET todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2)
      })
      .end(done)
  })
})

describe('POST todos', () => {
  it('should create a new todo', (done) => {
    let text = 'Test todo text'

    request(app)
      .post('/todos')
      .send({
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text)
      })
      .end((error, res) => {
        if (error) {
          return done(error)
        }

        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(3)
            expect(todos[2].text).toBe(text)
            done()
          })
          .catch((error) => {
            done(error)
          })
      })
  })

  it('should not create todo when presented with invalid data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((error, res) => {
        if (error) {
          return done(error)
        }

        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(2)
            done()
          })
          .catch((error) => {
            done(error)
          })
      })
  })
})
