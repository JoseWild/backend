import dbConnect from "../config/dbConnection.js";

export const getFluxoDeCaixa = ( result ) => {
    dbConnect.query('SELECT * FROM fluxodecaixa', (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const getFluxoPorData = (data, result) => {
    // const data = data.flux_datacad ;
    dbConnect.query('SELECT * FROM fluxodecaixa WHERE flux_datacad >= datain and flux_datacad <= datafin', (err, results) => {
        if (err) {
            console.log (err);
            result(err, null) ;
        } else (
            result(null, results)
        )
    })
}

export const insertFluxo = (data, result) => {
    dbConnect.query('INSERT INTO fluxodecaixa SET ?', [data], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const updateFluxo = (data, id, result) => {
    dbConnect.query('UPDATE fluxodecaixa SET flux_datacad = ?, flux_tipo = ?, flux_categoria = ?, flux_complemento = ?,'
        +' flux_valor = ? WHERE flux_id = ?',
        [ data.flux_datacad,
          data.flux_tipo,
          data.flux_categoria,
          data.flux_complemento,
          data.flux_valor,
          id], (err, result) =>{
            if (err) {
                console.log(err) ;
                result(err, null) ;
            } else {
                result(null, results)
            }
        })
}


export const deleteFluxo = (id) => {
    dbConnect.query('DELETE FROM fluxodecaixa WHERE flux_id = ?', [id], (err, results) =>{
        if (err) {
            console.log(err) ;
            result(err, null) ;
        } else {
            result(null, results)
        }
    })
}