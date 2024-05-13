import db from '../config/database.js'

//Buscando todos os clientes do banco
export const getClientes = (result) => {
    db.query("SELECT * FROM clientes", (err, results) => {
        if ( err ) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getClienteById = (id, result) => { 
    db.query("SELECT * FROM clientes WHERE cli_id = ?", [id], (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            result(null, results[0]);
        }
    });
}

export const cadastrar = (data, result) => {
    db.query('INSERT INTO clientes SET ?', [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const alterar = (data, id, result) => {
    db.query("UPDATE clientes SET cli_datacad = ?, cli_datanasc = ?, cli_pessoa = ?, cli_nome = ?,"
             +"cli_cpfcnpj = ?, cli_ciinsc = ?, cli_email WHERE cli_id = ?", 
              [ data.cli_datacad,
                data.cli_datanasc,
                data.cli_pessoa,
                data.cli_nome,
                data.cli_cpfcnpj,
                data.cli_ciinsc,
                data.cli_email,
                id], (err, results) => {
                if (err) {
                   console.log(err) ;
                   result(err, null) ;
                } else {
                   result(null, results) ;
                }
    })
}

//APAGAR UM REGISTRO DO BANDO DE DADOS
export const deletar = (id, result) => {
    db.query("DELETE FROM clientes WHERE cli_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err) ;
            result(err, null) ; 
        } else {
            result(null, results)
        }
    }) 
}


export const cadastrarTel = (data, id, result) => {
    db.query('INSERT INTO clientes_telefones SET ?', [data, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const cadastrarEnd = (data, result) => {
    db.query('INSERT INTO clientes_enderecos SET ?', [data], (err, results) => {
        if (err) {
            console.log(err) ;
            result(err, null);
        } else {
            result(null, results)
        }
    })
}

export const buscarID = (CPF, result) => {
    db.query('SELECT cli_id, cli_cpfcnpj FROM clientes WHERE cli_cpfcnpj = ?', [CPF],(err, results) =>{ 
        if (err) {
            console.log(err) ;
            result(err, null) ;
        } else {
            resul(null, results);
        }
    })
}