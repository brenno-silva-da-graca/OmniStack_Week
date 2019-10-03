const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-p9xfj.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// GET, POST, PUT, DELETE

//req.query = access query params (filter)
//req.params = access route params (edit and delete)
//req.body = access the requisition body (create, edit)

//search in the blog posts with Sequelize (node + SQL)

//routes needs to go after express.json()
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);