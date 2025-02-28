import express from 'express' ;
import cors from 'cors';
import Router from './routes/routes.js'

// import app  from './config/server.js';
const app = express() ;
app
    .use(express.json())
    .use(cors())
    .use(Router)

app.listen(3400, function(){
    console.log('Servidor ON')
});

