'use strict';
const express = require('express');
const app = express();
const routers = require('./routers');
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/database/connectDatabase');

dotenv.config({
    path: './config/env/.env',
});
connectDatabase();
const PORT = process.env.PORT
app.use(express.json());
app.use('/api', routers);
app.listen(PORT, (error) => {
    if (error) console.log("Server error: " + error);
    console.log(`Server listening on Port: ${PORT} http://localhost:${PORT} : ${process.env.NODE_ENV}`)
});