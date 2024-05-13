import express from 'express';
import { Produtos, ProdutoById, Produto, alterarProduto, apagarProduto  } from '../controllers/Product.js'
import { Clientes, ClientById, Cliente, Alterar, Deletar } from '../controllers/Client.js'

const router = express.Router();

router.get('/produtos', Produtos);
router.post('/produtos', Produto);
router.get('/produtos/:id', ProdutoById);
router.put('/produtos/:id', alterarProduto);
router.delete('/produtos/:id', apagarProduto);

router.get('/clientes', Clientes)
router.post('/clientes', Cliente)
router.get('/clientes/:id', ClientById);
router.put('/clientes/:id', Alterar);
router.delete('/clientes/:id', Deletar) ;




export default router;