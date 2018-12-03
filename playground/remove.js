const { ObjectID } = require('mongodb');

const { db } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');

let id = '5c03fcefe4122f279fe58431';

Todo.findByIdAndDelete(id)
    .then(todo => {
        console.log(todo);
    })
    .catch(err=>{
        console.log(err);
    });
