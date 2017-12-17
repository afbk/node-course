//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('MongoDB error: ' + err)
  }
  console.log('Connected to MongoDB server')

  //deletemany
  /*db.collection('Todos')
    .deleteMany({ text: 'Something to do' })
    .then((result) => {
      console.log(result)
    })*/

  //deleteone
  /*db.collection('Todos')
    .deleteOne({ text: 'Todo item' })
    .then((result) => {
      console.log(result)
    })*/
  //findoneanddelete
  /*db.collection('Todos')
    .findOneAndDelete({ completed: false })
    .then((result) => {
      console.log(result)
    })*/


  db.collection('Users')
    .findOneAndDelete({ _id: new ObjectID('5a32782c0451c2095d437635') })
    .then((result) => {
      console.log(result)
    })

  /*  db.collection('Users')
      .deleteMany({ name: 'Preben' })
      .then((result) => {
        console.log(result)
      })
  */
  //db.close()
})
