import db from '../config/database.js'

// BUSCANDO TODOS OS PRODUTOS DO BD
export const getProducts = (result) => {
   db.query("SELECT * FROM produtos", (err, results) => {
      if (err) {
         console.log(err);
            result(err, null);
         } else {
            result(null, results);
         }
   });
}
 
// BUSCAR POR UM PRODUTO NO BD
export const getProductById = (id, result) => {
      db.query("SELECT * FROM produtos WHERE prod_id = ?", [id], (err, results) => {
         if (err) {
            console.log(err);
            result(err,null);
         } else {
            result(null, results[0]);
         }
      })
}

// INSERIR UM PRODUTO NO BD
export const inserirProduto = (data, result) => {
      db.query("INSERT INTO produtos SET ?", [data], (err, results) => {
           if (err) {
              console.log(err);
              result(err, null);
           } else {
              result(null, results[0]);
           }
      });
}

// ALTERAR DADOS NO BD
export const alterar = (data, id, result) => {
      console.log(id)
      db.query("UPDATE produtos SET prod_descricao = ?, prod_referencia = ?, prod_qtd = ?, prod_custo = ?,prod_venda = ?,"
               +"prod_end = ?, prod_num = ?, prod_obs = ? WHERE prod_id = ?", 
                       [ data.prod_descricao, 
                         data.prod_referencia, 
                         data.prod_qtd,
                         data.prod_custo,
                         data.prod_venda,
                         data.prod_end,
                         data.prod_num,
                         data.prod_obs, 
                         id], (err, results) => {
                  if (err) {
                    console.log(err);
                    result(err, null);
                  } else {
                    result(null, results)
                  }     
               });
}

// APAGAR PRODUTO EM BD
export const apagar = (id, result) => {
   db.query("DELETE FROM produtos WHERE prod_id = ?", 
      [id], (err, results) => {
      if (err) {     
            console.log(err);
            result(err, null);
         } else {
            result(null, results);
          }
   });
}
