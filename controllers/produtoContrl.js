import { getProdutos, getProdutosID, getIDProduto, insertProdutos, updateProduto, deleteProduto } from "../models/produtosModel.js";


export const produtosShow = (req, res) => {
    getProdutos((err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results)
        }
    })
}

export const produtosIDShow = (req, res) => {
    getProdutosID(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results)
        }
    });
}

export const IDProdutoShow = (req, res) => {
    getIDProduto((err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results);
        }
    })
}

export const produtosInsertShow = (req, res) => {
    const data = req.body ;
    insertProdutos(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    } ) 
}

export const alterarProdutoShow = (req, res) => {
    const data = req.body ;
    const id = req.params.id ;
    updateProduto(data, id,  (err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results) ;
        }
    } )
}


export const deleteProdutoShow =  (req, res) => {
    const id = req.params.id ;
    deleteProduto(id, (err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results) ;
        }
    })
}