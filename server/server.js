const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/Todo');
const { User } = require('./models/User');

const app = express();

//* Middlewares
app.use(bodyParser.json());

//* Routes
app.post('/todos', (req, res) => {
    console.log(req.body);
    const todo = Todo({
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

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };