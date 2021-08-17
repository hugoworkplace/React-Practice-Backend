const express = require('express')
const contractors = require('./routes/contractors');


const app = express()


app.use(express.json());
app.use('/contractors', contractors);
app.listen(4000);

