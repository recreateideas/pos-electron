const express = require('express');
const { asyncMiddleware } = require('../modules');
const controllers = require('../controllers');

const router = express.Router();

router.post('/checkout', asyncMiddleware(controllers.billing.checkout));

module.exports = router;
