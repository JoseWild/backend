// IMPORTANDO FUNCOES DO PRODUCT
import { getProducts, getProductById, inserirProduto, alterar, apagar } from  '../models/productModel.js'

// PEGAR TODOS OS PRODUTOS
export const Produtos = (req, res) => {
    getProducts((err, results) => {
         if (err) {
             res.send(err) ;
         } else {
             res.json(results) ;
         }
    });
}

// PEGANDO UM PRODUTO NO BANCO
export const ProdutoById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
       if (err) {
          res.send(err) ;
       } else {
          res.json(results);
       }
    }); 
}

//CREANDO UM PRODUTO NO BD
export const Produto = (req, res) => {
       const data = req.body;
       inserirProduto(data, (err, results) => {
          if (err) {
              res.send(err) ;
          } else {
              res.json(results);
          }
       });
}

// ALTERAR PRODUTO
export const alterarProduto = (req, res) => {
       const data = req.body ;
       const id   = req.params.id ;
       alterar(data, id, (err, results) => {
            if (err) {
                res.send(err) ;
            } else {
                res.json(results) ;
            }
       });
}

// APAGAR UM PRODUTO DO BANCO DE BD
export const apagarProduto = (req, res) => {
       const id = req.params.id ;
       apagar(id, (err, results) => {
            if (err) {
                res.send(err);
            } else {
                res.json(results) ;
            }
       })
}
