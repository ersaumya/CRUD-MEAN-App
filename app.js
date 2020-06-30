const express=require('express');
const apiRoutes = require("./server/routes/api.routes");

//setup env settings
require('dotenv').config();
//database import
require('./server/config/db');

const app=express();

//json parsing
app.use(express.json());

app.use('/api',apiRoutes);

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});