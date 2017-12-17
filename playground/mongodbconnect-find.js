//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('MongoDB error: ' + err)
  }
  console.log('Connected to MongoDB server')


  db.collection('Users').find({
      name: 'Preben'
    })
    .toArray()
    .then((result) => {
      console.log('Users')
      console.log(JSON.stringify(result, undefined, 2))
    }, (err) => {
      if (err) {
        return console.log('Error:', err)
      }
    })

  /*db.collection('Users').find().count().then((result) => {
    console.log(`Todos count: ${result}`)

  }, (err) => {
    if (err) {
      return console.log('Error:', err)
    }
  })*/

  //db.close()
})
