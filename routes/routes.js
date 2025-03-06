import express from 'express'
import { produtosIDShow, IDProdutoShow, produtosInsertShow, produtosShow, alterarProdutoShow, deleteProdutoShow } from '../controllers/produtoContrl.js'
import { clienteIDShow, clienteShow, ClientePostShow, ClienteShowID } from '../controllers/clienteControl.js';
import { showEmpresas, showEmpresasID, showInsert, showUpdate, showDelete } from '../controllers/empresaControl.js';
import { fluxoShow, fluxoPorIDShow, fluxoPorData, fluxoInsertShow, fluxoUpdateShow, fluxoDeleteShow } from '../controllers/fluxoControl.js';



const router = express.Router() ;

router.get('/', (req, res) => { 
    res.send('Ola, esta aplicacao esta rodando em NodeJS versao ' + process.version);
})

router.get('/produtos', produtosShow);
router.get('/produto/:id', produtosIDShow);
router.post('/produto/cadastro', produtosInsertShow);
router.put('/produto/alterar/:id', alterarProdutoShow)
router.delete('/produtos/:id', deleteProdutoShow)


router.get('/clientes', clienteShow);
router.get('/clientes/:id', clienteIDShow);
router.post('/cliente', ClientePostShow);
router.get('/cliente/clienteid', ClienteShowID)

router.get('/empresas', showEmpresas);
router.get('/empresa/:id', showEmpresasID);
router.post('/empresa/cadastro', showInsert);
router.put('/empresa/alterar/:id', showUpdate);
router.delete('/empresas/excluir/:id', showDelete);

router.get('/fluxodecaixa', fluxoShow);
router.get('/fluxodecaixa/:id', fluxoPorIDShow);
router.get('/fluxodecaixa/pordata', fluxoPorData) ;
router.post('/fluxodecaixa/cadastro', fluxoInsertShow) ;
router.put('/fluxodecaixa/alterar/:id', fluxoUpdateShow);
router.delete('/fluxodecaixa/:id', fluxoDeleteShow) ;
 
export default router;

