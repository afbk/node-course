//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('MongoDB error: ' + err)
  }
  console.log('Connected to MongoDB server')

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('5a3184246a0d7137ffc855d6')
    }, {
      $set: {
        name: 'Ikke Anders',
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result)
    })



  db.close()
})
