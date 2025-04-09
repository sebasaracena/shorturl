class DTEUSeCase{
     
    constructor(dteInterfece){
        this.dteInterfece = dteInterfece;
    }

    getDteByCode = async (dteId) => {
       return await this.dteInterfece.getDteByCode(dteId);
    }
   
    getDteList = async () => {
        return await this.dteInterfece.getDteList();
    }

}

module.exports = DTEUSeCase;