
class DTEController{
    constructor(dteUseCase){
        this.dteUseCase = dteUseCase;
    }

   getDteByCode = async (req, res) => {
        try {
            const { dteId } = req.query;
            const dte = await this.dteUseCase.getDteByCode(dteId);
            if (!dte) {
                return res.status(404).json({ message: 'DTE not found' });
            }
            return res.status(200).json(dte);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    getDTeList= async (req, res) => {
        try {
            const dteList = await this.dteUseCase.getDteList();
            return res.status(200).json(dteList);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } 
}

module.exports = DTEController;