const { ObjectID } = require('mongodb');

const { db } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');

let id = '6c0278777658fd323b94fa82';

User.findById(id)
    .then(user => {
        if (!user) {
            console.warn('User not found');
            return db.close();
        }
        console.info('User found: ');
        console.log(JSON.stringify(user, undefined, 2));
        db.close();
    })
    .catch(err => {
        if (!ObjectID.isValid(id)) {
            console.error('Invalid ID');
        } else {
            console.error('An error occured! ', err)
        } db.close();
    });

// Todo.findById(id)
//     .then(todo => {
//         if (!todo) {
//             console.warn('Todo not found');
//             return mongoose.connection.close();
//         }
//         console.info('Todo found:');
//         console.log(JSON.stringify(todo, undefined, 2));
//         mongoose.connection.close();
//     })
//     .catch(err => {
//         console.error('An error occured ', err);
//         mongoose.connection.close();
//     })