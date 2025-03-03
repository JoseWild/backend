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
            result(null, results);
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
    dbConnect.query('UPDATA empresas SET ? WHERE emp_id =  ?', [data, id], (err, results) => {
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