const express = require('express');
const router = express.Router();
const response = require('../../../network/response');
const Controller = require('./controller');

router.get('/', (req, res) => {
    const lista = Controller.list();
    response.success(req, res, lista, 200);
});

module.exports = router;