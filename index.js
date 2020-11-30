const express = require('express');
const app = express();

// middle ware excepts JSON data to API
app.use(express.json({ extended: false }));


const PORT = 5000;

app.listen(PORT, () => console.log('server on ', PORT))