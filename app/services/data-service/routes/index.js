const express = require('express');

const healthRouter = require('./health');
const productsRouter = require('./products');
const billingRouter = require('./billing');

const router = express.Router({ mergeParams: true });

router.use('/health', healthRouter);
router.use('/products', productsRouter);
router.use('/billing', billingRouter);

module.exports = router;
