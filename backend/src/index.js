const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbName = 'twitterClone';
const url = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(url, { useNewUrlParser: true });

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
