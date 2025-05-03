//step 1 import
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = 8000;
const todoRouter = require('./routes/todo');


//step 4 middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//step 3 route
app.use('/api',todoRouter);

//step 2
app.listen(port,()=>{
    console.log(`Server is Running at ${port} `);
});