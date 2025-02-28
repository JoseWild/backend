import mysql from 'mysql2' ;

// const dbConnect = function() {
//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '53364430187',
//         database: 'cstbalancas',
//         port: 3306
//     });
// } 
// export default function() {
//     return dbConnect()
// }

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '53364430187',
    database: 'cstbalancas',
    port: 3306
})

export default dbConnect;

