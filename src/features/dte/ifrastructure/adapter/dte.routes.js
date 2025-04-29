const DTERepository= require('../repository/DTE.repository');
const DTERepositoryImpl = require('./dte.repository.impl');
const DTEUseCase = require('../../application/DTE.use_case');
const DTEController = require('../api/dte.controller');
const express = require('express');

 module.exports = (conn) => {
    const router = express.Router();
    const dteRepository = new DTERepository(conn);
    const dteRepositoryImpl = new DTERepositoryImpl(dteRepository);
    const dteUseCase = new DTEUseCase(dteRepositoryImpl);
    const dteController = new DTEController(dteUseCase);

    router.get('/get/', dteController.getDteByCode);
    router.get('/get-list', dteController.getDTeList);

    return router;
 }
