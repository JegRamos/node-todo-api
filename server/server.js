const express = require('express');
const bodyParser = require('body-parser');

const { ObjectID } = require('mongodb');
const { db } = require('./db/mongoose');
const { Todo } = require('./models/Todo');
const { User } = require('./models/User');

const app = express();

//? Middlewares
app.use(bodyParser.json());

//? Routes
//* POST - /todo - Create a todo
app.post('/todos', (req, res) => {
    let todo = Todo({
        text: req.body.text
    });
    todo.save()
        .then(doc => {
            res.send(doc);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

//* GET - /todos - List all todos
app.get('/todos', (req, res) =>{
    Todo.find()
        .then(todos => {
            res.send({ todos });
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

//* GET - /todos/:id - Show a todo
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    } 
    Todo.findById(id)
        .then(todo => {
            if (!todo) {
                return res.status(404).send();
            } 
            res.send({ todo });
        })
        .catch(err => {
            res.status(400).send();
        });
});

//* DELETE - /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndDelete(id)
        .then(todo => {
            if (!todo) {
                return res.status(404).send();
            }
            res.status(200).send({ todo });
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };