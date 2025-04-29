const ShortUrlRepository = require('../repository/shortUrl.repository');
const ShortUrlRepositoryImpl = require('./shortUrl.repository.impl');
const ShortUrlUseCase = require('../../application/shortUrl.use_case');
const ShortUrlController = require('../api/shortUrl.controller');
//---dependencias de los feature dte ------//
const DTERepository = require('../../../dte/ifrastructure/repository/DTE.repository');
const DTERepositoryImpl = require('../../../dte/ifrastructure/adapter/dte.repository.impl');
const DTEUseCase = require('../../../dte/application/DTE.use_case');
const express = require('express');

module.exports = (conn) => {

    const router = express.Router();

    const shortUrlRepository = new ShortUrlRepository(conn);
    const shortUrlRepositoryImpl= new ShortUrlRepositoryImpl(shortUrlRepository);
    const shortUrlUseCase = new ShortUrlUseCase(shortUrlRepositoryImpl);

    const dteRepository = new DTERepository(conn);
    const dteRepositoryImpl = new DTERepositoryImpl(dteRepository);
    const dteUseCase = new DTEUseCase(dteRepositoryImpl);

    const shortUrlController = new ShortUrlController(shortUrlUseCase,dteUseCase);

    router.post('/create', shortUrlController.createShortUrl);
    router.get('/get-list', shortUrlController.getShortUrlList);
    router.get('/get', shortUrlController.findByCode);
    router.get('/use', shortUrlController.useShortUrl);
    return router
}
