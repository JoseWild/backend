import mysql from 'mysql2';

// CRIAR CONECCAO COM O DB  
const db = mysql.createConnection({
           host: 'mysql.cstbalancas.com.br',
           user: 'cstbalancas',
           password: 'Cstwild533644',
           database: 'cstbalancas',
           port: 3306,
           multipleStatements: true
});

export default db;

/*
async function  connect() {
  if (global.conn  && global.conn.state != 'disconected')
     return global.conn

const mysql = require('mysql2/promise')
const conn = await mysql.createConnection({
      host: 'mysql.cstbalancas.com.br',
      user: 'cstbalancas',
      password: 'Cstwild533644',
      database: 'cstbalancas',
      port: 3306
})
console.log('Conectou ao mysql !!!')
global.conn = conn ;
return conn 
}

connect()

module.exports = {}
*/