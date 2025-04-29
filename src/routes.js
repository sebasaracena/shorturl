const ShorUrlRouter= require('./features/shorturl/infrastruture/adapter/shortUrl.routes');
const DTERouter= require('./features/dte/ifrastructure/adapter/dte.routes');
module.exports = (app,conn) => {
    app.use('/api/shorturl', ShorUrlRouter(conn));
    app.use('/api/dte', DTERouter(conn));
}