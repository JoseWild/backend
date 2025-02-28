import express from 'express';
import consign from 'consign';
// import { ExpressValidator } from 'express-validator';




const app = express() ;

// app.use(new ExpressValidator())

consign()
    .include('')
    .then('../backend/config/dbConnection.js')
    .then('../backend/models')
    .then('../backend/controllers')
    .into(app)

export default app ;
