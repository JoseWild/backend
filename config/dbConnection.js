import mysql from 'mysql2' ;

//CRIAR CONECCAO COM O DB  
  const dbConnect = mysql.createConnection({
            host: 'mysql.cstbalancas.com.br',
            user: 'cstbalancas',
            password: 'Cstwild533644',
            database: 'cstbalancas',
            port: 3306,
            multipleStatements: true
    });

// const dbConnect = mysql.createConnection({
//      host: 'localhost',
//      user: 'root',
//      password: '53364430187',
//      database: 'cstbalancas',
//      port: 3306
//  })

export default dbConnect;

