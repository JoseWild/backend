// import express
import express from "express";
// import cors
import cors from "cors";

import bodyParser from "body-parser";

// import routes
import Router from "./routes/routes.js";
 
// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// use router
app.use(Router);

app.listen(21050)

//Rota principal da aplicacao, para acesso direto na porta
app.get('/', (req, res) => { 
    res.send('<h1>'+'Ola, esta aplicação esta rodando em NodeJS versão ' + process.version+'</h1>);
    })
     

console.log('Server running at on-line port: 21050');