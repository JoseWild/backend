import { getFluxoDeCaixa, getFluxoPorID, getFluxoPorData, insertFluxo, updateFluxo, deleteFluxo } from '../models/fluxoModel.js'

export const fluxoShow = (req, res) => {
    getFluxoDeCaixa((error, results) => {
        if ( error ) {
            res.send(error) ;
        } else {
            res.json(results)
        }
    })
}

export const fluxoPorIDShow = (req, res) => {
    getFluxoPorID(req.params.id, (error, results) => {
        if (error) {
            res.send(error) ;
        } else {
            res.json(results)
        }
    })
}

export const fluxoPorData = (req, res) => {
    getFluxoPorData((error, results) => {
        if (error) {
            res.send(error) ;
        } else {
            res.json(results)
        }
    })
}

export const fluxoInsertShow = (req, res) => {
    const data = req.body
    insertFluxo(data, (error, results) => {
        if (error) {
            res.send(error) ;
        } else {
            res.json(results)
        }
    })
}

export const fluxoUpdateShow = (req, res) => {
    const data = req.body ;
    const id = req.params.id ;
    updateFluxo(data, id,( error , results) => {
        if (error) {
            res.send(error) ;
        } else {
            res.json(results)
        }
    })
}

export const fluxoDeleteShow = (req, res) => {
    const id = req.params.id ;
    deleteFluxo(id, (error, results) => {
        if (error) {
            res.send(error) ;
        } else {
            res.json(error) ;
        }
    })
}