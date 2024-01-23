import express from 'express';
import { Produtos, ProdutoById, Produto, alterarProduto, apagarProduto  } from '../controllers/Product.js'

const router = express.Router();

router.get('/produtos', Produtos);
router.post('/produtos', Produto);
router.get('/produtos/:id', ProdutoById);
router.put('/produtos/:id', alterarProduto);
router.delete('/produtos/:id', apagarProduto);

export default router;