const express = require('express');
const connectDB = require('./config/db');
const app = express();
// connect to DB
connectDB();
// middle ware excepts JSON data to API
app.use(express.json({ extended: false }));
// routes defined
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = 5000;

app.listen(PORT, () => console.log('server on ', PORT))