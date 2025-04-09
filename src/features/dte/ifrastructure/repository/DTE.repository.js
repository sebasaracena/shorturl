const DTEModel = require('./persistence/dte.model');

class DTERepository{
    constructor(conn){
        this.conn = conn;
    }
   
    getDteByCode = async (dteId) => {
        await this.conn.connect();
        const dte = await DTEModel.findOne({ dteId });
        await this.conn.disconnect();
        return dte;
    }

    getDteList = async () => {
        await this.conn.connect();
        const dteList = await DTEModel.find({});
        await this.conn.disconnect();
        return dteList;
    }
}

module.exports = DTERepository;