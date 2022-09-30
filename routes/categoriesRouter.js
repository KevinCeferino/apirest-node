const express = require('express');

const categoriesService = require('./../services/categoriesService');

const router = express.Router();
const service = new categoriesService();

router.get('/', (req,res) => {
    const category = service.index();
    res.json(category);
})

module.exports = router;