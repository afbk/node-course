//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('MongoDB error: ' + err)
  }
  console.log('Connected to MongoDB server')

  db.collection('Todos')
    .insertOne({
      //_id: 123,
      text: "Todo item",
      completed: false
    }, (err, result) => {
      if (err) {
        return console.log('Error inserting', err)
      }
      console.log(JSON.stringify(result.ops, undefined, 2))
      console.log(result.ops[0]._id.getTimestamp())
    })


  db.close()
})
