import { deleteEmpresas, getEmpresas, getEmpresasID, postEmpresa, updateEmpresa } from "../models/empresasModel.js"

export const showEmpresas = (req, res) => {
    getEmpresas((err, results) => {
        if (err) {
            res.send(err) ;
        } else {

            res.json(results) ;
        }
    })
}

export const showEmpresasID = (req, res) => {
    getEmpresasID(req.params.id, (err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results) ;
        }
    })
}

export const showInsert = (req, res) => {
    const data = req.body ;
    postEmpresa(data, (err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results) ;
        }
    })
 }

 export const showUpdate = (req, res) => {
    const data = req.body ;
    const id = req.params.id ;
    updateEmpresa(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
 }

 export const showDelete = (req, res) => {
    const id = req.params.id ;
    deleteEmpresas(id, (err, results) => {
        if (err) {
            res.send(err) ;
        } else {
            res.json(results) ;
        }
    })
 }