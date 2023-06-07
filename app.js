require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const conn = require('express-myconnection');
const route = require('');

const app = express();
const PORT = process.env.PORT || 5001;
const dbconfig = {
    host: process.env.DB_USER || 'localhost',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root123',
    database: process.env.DB_NAME || 'node-tutorial',
};

app.use(conn(mysql, dbconfig, 'single'));
app.use(express.json());
app.use('/', route);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})