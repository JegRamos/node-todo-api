const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to mongodb server');
    }
    
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');
   
    db.collection('Todos').find({completed: true}).toArray()
        .then((docs) => {
            console.log('Todos: ');
            console.log(JSON.stringify(docs, undefined, 2));
        })
        .catch((error) => {
            console.log('Unable to fetch todos ', error);
        });
    
    // db.collection('Todos').insertOne({
    //     text: 'Become sad',
    //     completed: true
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to inser todo', error);
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    // db.collection('Users').insertOne({
    //     name: 'Jeg Ramos',
    //     age: 21,
    //     roles: ['developer', 'test engineer']
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert user', error);
    //     } else {
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //     }
    // });

    //client.close();
});