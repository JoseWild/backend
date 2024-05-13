import { getClientes, getClienteById, cadastrar, alterar, deletar, cadastrarTel, cadastrarEnd, buscarID } from "../models/clientModel.js";

// PEGAR TODOS OS CLIENTES
export const Clientes = (req, res) => {
    getClientes((err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results)
        }
    })
}

// PEGANDO UM PRODUTO NO BANCO
export const ClientById = (req, res) => {
    getClienteById(req.params.id, (err, results) => {
       if (err) {
          res.send(err) ;
       } else {
          res.json(results);
       }
    }) 
}

// PEGANDO O ID DO NOVO CLIENTE PARA GRAVAR ENDEREÇOS E TELEFONES
export const obterIdPorCPF = (req, res) => {
    buscarID(req.params.CPF, (err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results);
        }
    });
}

//ADICIONANDO CLIENTES A TABELA
export const Cliente = (req, res) => {
    const data = req.body ;
        cadastrar(data, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}


//ALTERAR CLIENTE CADASTRADO
export const Alterar = (req, res) => {
    const data = req.body ;
    const id   = req.params.id ;
    alterar(data, id, (err, results) => {
         if (err) {
            console.log(err) ;
         }  else {
            res.json(results) ;
         }
    })
}

//APAGAR UM REGISTRO DO BD
export const Deletar = (req, res) => {
    const id = req.params.id;
    deletar(id, (err, results) =>{
        if (err) {
            console.log(err) ;
        } else {
            res.json(results) ;
        }
    })
}

// 
export const InsertTel = (req, res) => {
    const data = req.body;
    cadastrarTel(data, (res, results) => {
        if (err) {
            res.sender(err)
        } else {
            res.json(results)
        }
    })
}

export const InsertEnd = (req, res) => {
    const data = req.body;
    cadastrarEnd(data, (req, results) => {
        if (err) {
            res.sender(err)
        } else {
            res.json(results)
        }
    })
}