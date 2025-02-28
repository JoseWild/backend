import dbConnect from "../config/dbConnection.js"


export const getProdutos = (result) => {
    dbConnect.query("SELECT * FROM produtos", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null) ;
        } else {
            result(null, results);
        }
    });
}

export const getProdutosID = (id, result) => {
    dbConnect.query('SELECT * FROM produtos WHERE prod_id = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const getIDProduto= (result) => {
    dbConnect.query('SELECT prod_id FROM produtos WHERE prod_id = LAST_INSERT_ID()', (err, results) => {
        if (err) {
            console.log(err) ;
            result(err, null) ;
        } else {
            result(null, results)
        }
    })
}

export const insertProdutos =(data, result) => {
    dbConnect.query('INSERT INTO produtos SET ?', [data], (err, results) => {
        if (err) {
            console.log(err) ;
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

export const updateProduto = (id, data, result) => {
    dbConnect.query('UPDATE SET produtos WHERE prod_id = ?', [id], (data, results) => {
        if (err) {
            console.log(err) ;
            result(err, null) ;
        } else {
            result(null, results);
        }
    })
}

export const deleteProduto = (id, result) => {
    dbConnect.query('DELETE FROM produtos WHERE prod_id = ?', [id], (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
} 