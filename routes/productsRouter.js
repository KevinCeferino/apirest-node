const express = require('express');

const ProductsService = require('./../services/productsService')

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
  res.json(products);
  } catch(error){
    next(error)
  }
});


router.get('/filter', (req,res) => {
  res.send('Soy un filtro');
})

router.get('/:id', (req,res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req,res)=>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});


router.patch('/:id', (req,res)=>{
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});


router.put('/:id', (req,res)=>{
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});

router.delete('/:id', (req,res)=>{
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  });
});

module.exports = router;
