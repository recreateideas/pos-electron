const express = require('express');

const healthRouter = require('./health');
const productsRouter = require('./products');

const router = express.Router({ mergeParams: true });

router.use('/health', healthRouter);
router.use('/products', productsRouter);

module.exports = router;
