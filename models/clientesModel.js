import dbConnect from "../config/dbConnection.js";

export const getClientes = (result) => {
    dbConnect.query('SELECT * FROM clientes', (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results) ;
        }
    }) 
}

export const getClienteID = (id, result) => {
    dbConnect.query('SELECT * FROM clientes WHERE cli_id = ?', [id], (err, results) => {
        if (err) {
            console.log(err) ;
            result(err, null) ;
        } else {
            result(null, results[0]);
        }
    })
}

export const getIDCliente = (result) => {
    dbConnect.query('SELECT * FROM clientes WHERE cli_id = last_insert_id()', (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    })
}

export const postCliente = (data, result) => {
    dbConnect.query('INSERT INTO clientes SET ?', [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

// export const alterarCliente =(id, data, result) => {
//     dbConnect.query('')
// }