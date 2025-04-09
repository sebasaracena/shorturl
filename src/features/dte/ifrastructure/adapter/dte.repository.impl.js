const DTEInterface = require("../../domain/dte.interface");

class DTERepositoryImpl extends DTEInterface{

    constructor(dteRespository) {
        super();
        this.dteRespository = dteRespository;
    }

    getDteByCode = async (dteId) => {
        return await this.dteRespository.getDteByCode(dteId);
    };

    getDteList = async () => {
        return await this.dteRespository.getDteList();
    };
}

module.exports = DTERepositoryImpl;