import { getClientes, getClienteID, getIDCliente, postCliente } from "../models/clientesModel.js";

export const clienteShow = (req, res) => {
    getClientes((err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results);
        }
    })
}

export const clienteIDShow = (req, res) => {
    getClienteID(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

export const ClienteShowID = (req, res) => {
    getIDCliente((err, results) => { 
        if (err) {
            res.send(err);
        } else {
            res.json(results)
        }
    })
}


export const ClientePostShow = (req, res) => {
    const data  = req.body
    postCliente(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results)
        }
    })
}