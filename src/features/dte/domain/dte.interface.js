class DTEInterface{

    getDteByCode(dteId) {
        throw new Error("getDTeData method must be implemented");
    }
    getDteList() {
        throw new Error("getDTeList method must be implemented");
    }

}

module.exports = DTEInterface;