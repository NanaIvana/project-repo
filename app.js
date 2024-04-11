import { createConnection } from 'typeorm';
import { Product } from './Entities/Product';

const express = require('express');
const app = express();

createConnection({
    type: 'mysql',
    database: 'stock_management_db',
    username: 'root',
    password: '',
    logging: true,
    synchronize: true,
    entities: [Product],

})

app.get('/', (req,res) => {
    res.send("Welcome to Express Js");
})

app.listen(4000, ()=>{
    console.log("listening to port number 4000")
})
