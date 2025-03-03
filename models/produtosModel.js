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

export const updateProduto = (data, id, result) => {
    dbConnect.query('UPDATE produtos SET prod_data = ?, prod_descricao = ?, prod_referencia = ?, prod_qtd = ?,'
        +' prod_custo = ?, prod_venda = ?, prod_end = ?, prod_num = ?, prod_obs = ?' 
        +' WHERE prod_id = ?',
         [      data.prod_data,
                data.prod_descricao,
                data.prod_referencia,
                data.prod_qtd,
                data.prod_custo,
                data.prod_venda,
                data.prod_end,
                data.prod_num,
                data.prod_obs, id], (err, results) => {
        if (err) {
            console.log(err) ;
            result(err, null) ;
        } else {
            result(null, results);
        }
    })
}

export const deleteProduto = (id, result) => {
    dbConnect.query('DELETE FROM produtos WHERE prod_id = ?', 
        [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
} 