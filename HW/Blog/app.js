import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import expressLayout from 'express-ejs-layouts';
import router from './server/routes/main.js';
import connectDB from './server/config/db.js';

const app = express();
const PORT = 5000 || process.env.PORT;

const startServer = async () => {
    console.log("Connecting to DB...");
    //connect DB
    connectDB();

    app.use(express.static('public'));

    //Templating engine
    app.use(expressLayout);
    app.set('layout','./layouts/main');
    app.set('view engine','ejs');

    app.use('/',router)

    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
};

startServer();

