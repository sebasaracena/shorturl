const ShorUrlRouter= require('./features/shorturl/infrastruture/api/shortUrl.routes');
const DTERouter= require('./features/dte/ifrastructure/api/dte.routes');
module.exports = (app,conn) => {
    app.use('/api/shorturl', ShorUrlRouter(conn));
    app.use('/api/dte', DTERouter(conn));
}