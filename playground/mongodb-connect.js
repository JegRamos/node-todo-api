const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to mongodb server');
    }
    
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('Users').find().toArray()
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })
        .catch((error) => {
            console.log(error);
        });

    db.collection('Users').findOneAndUpdate({name: 'Shirley'}, {$set: {age: 41}}, {returnOriginal: false})
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })
        .catch((error) => {
            console.log(error);
        });
    
    db.collection('Users').findOneAndUpdate({name: 'Jeg Ramos'}, {$set: {age: 21, name: 'Jeg Ramos'}}, {returnOriginal: false})
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })
        .catch((error) => {
            console.log(error);
        });
    // db.collection('Users').deleteMany({name: 'Jeg Ramos'})
    //     .then((result) => {
    //         console.log(result)
    //     }). catch((error) => {
    //         console.log('Unable to delete documents ', error);
    //     });
    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5c02390ddcf0e71d87ec50fe')})
    //     .then((result) => {
    //         console.log('Document deleted: ');
    //         console.log(result);
    //     }) .catch((error) => {
    //         console.log('Unable to delete document ', error);
    //     });

    // db.collection('Todos').find({completed: true}).toArray()
    //     .then((docs) => {
    //         console.log('Todos: ');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     })
    //     .catch((error) => {
    //         console.log('Unable to fetch todos ', error);
    //     });
    
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