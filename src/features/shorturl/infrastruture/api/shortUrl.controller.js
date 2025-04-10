class ShortURlController{

    constructor(shortUrlUseCase, dteUseCase) {
        this.dteUseCase = dteUseCase;
        this.shortUrlUseCase = shortUrlUseCase;
    }

    createShortUrl= async (req, res) => {
        try {
            const newShorturl = req.body;
            const dteId = await this.dteUseCase.getDteByCode(newShorturl.dteId);
            if (!dteId) {
                return res.status(404).json({ message: 'DTE not found' });
            }
    
            const shortUrl = await this.shortUrlUseCase.createShortUrl(newShorturl);
            res.status(201).json(shortUrl.shortUrlCode);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    getShortUrlList= async (req, res) => {
        try {
            const shortUrl = await this.shortUrlUseCase.getShortUrlList();
            res.status(200).json(shortUrl);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    findByCode= async (req, res) => {
        try {
            const { shortUrlCode } = req.query;
            const shortUrl = await this.shortUrlUseCase.findByCode(shortUrlCode);
            if (!shortUrl) {
                return res.status(404).json({ message: 'Short URL not found' });
            }
            res.status(200).json(shortUrl);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    useShortUrl= async (req, res) => {
        try {
            const { shortUrlCode } = req.query;
            const shortUrl = await this.shortUrlUseCase.findByCode(shortUrlCode);
            if (!shortUrl) {
                return res.status(404).json({ message: 'Short URL not found' });
            }
            const updatedShortUrl = await this.shortUrlUseCase.useShortUrl(shortUrl);
            //res.status(200).json(updatedShortUrl);
            res.redirect(updatedShortUrl.originalUrl);
            
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports= ShortURlController;