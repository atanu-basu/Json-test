const express = require('express');
const app = express();
const data = require('./data.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port' + PORT));
