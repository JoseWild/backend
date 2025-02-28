import express from 'express'
import { produtosIDShow, IDProdutoShow, produtosInsertShow, produtosShow, alterarProdutoShow } from '../controllers/produtoContrl.js'
import { clienteIDShow, clienteShow, ClientePostShow, ClienteShowID } from '../controllers/clienteControl.js';


const router = express.Router() ;

router.get('/', (req, res) => { 
    res.send('Ola, esta aplicacao esta rodando em NodeJS versao ' + process.version);
})
router.get('/produtos', produtosShow);
router.get('/produtos/:id', produtosIDShow);
router.post('/produtos', produtosInsertShow);
router.put('/produto/alterar/:id', alterarProdutoShow)
router.get('/produtosid', IDProdutoShow)
router.get('/clientes', clienteShow);
router.get('/clientes/:id', clienteIDShow);
router.post('/cliente', ClientePostShow);
router.get('/cliente/clienteid', ClienteShowID)

export default router;

