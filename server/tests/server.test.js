let request = require('supertest')
let expect = require('expect')

let { app } = require('../server')
let { Todo } = require('../models/todo')

beforeEach((done) => {
  Todo.remove({})
    .then(() => done())
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
            expect(todos.length).toBe(1)
            expect(todos[0].text).toBe(text)
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
            expect(todos.length).toBe(0)
            done()
          })
          .catch((error) => {
            done(error)
          })
      })
  })
})
