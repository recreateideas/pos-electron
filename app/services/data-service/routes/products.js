const express = require('express');
const { asyncMiddleware } = require('../modules');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', asyncMiddleware(controllers.products.getProducts));

module.exports = router;
