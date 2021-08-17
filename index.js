const express = require('express')
const contractors = require('./routes/contractors');


const app = express()
const cors = require('cors');
app.use(cors({
    origin: 'https://hugoworkplace.xyz'
}));

app.use(express.json());
app.use('/api/contractors', contractors);
app.listen(4000);

