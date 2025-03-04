import dbConnect from "../config/dbConnection.js";

export const getEmpresas = (result) => {
    dbConnect.query('SELECT * FROM empresas', (err, results) => {
        if (err) {
            console.log(err);
            result(err, null); 
        } else {
            result(null, results);
        }
    })
}

export const getEmpresasID = (id, result) => {
    dbConnect.query('SELECT * FROM empresas WHERE emp_id = ?', [id], (err, results) => {
        if (err) {
            console.log('err');
            result(err, null);
        } else {
            result(null, results[0]);
        }
    })
}

export const postEmpresa = (data, result) => {
    dbConnect.query('INSERT INTO empresas SET ?', [data],  (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}


export const updateEmpresa = (data, id, result) => {
    dbConnect.query('UPDATE empresas SET emp_datacad = ?, emp_razao = ?, emp_fantasia = ?, '
        +'emp_cnpj = ?, emp_insc = ? WHERE emp_id =  ?',
        [ data.emp_datacad,
          data.emp_razao,
          data.emp_fantasia,
          data.emp_cnpj,
          data.emp_insc, 
          id], (err, results) => {
        if (err) {
            console.log(err) ;
            result(err, null) ;
        } else {
            result(null, results)
        }
    }) 
}

export const deleteEmpresas = (id, result) => {
    dbConnect.query('DELETE FROM empresas WHERE emp_id = ?', [id], (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}