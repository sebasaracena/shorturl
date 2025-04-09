const ShortUrlModel = require('./persistence/shortUrl.model');
class shortUrlRepository {
    /**
     * @param {import('mongoose').Connection} conn - The database connection.
     */
    constructor(conn) {
      
        this.conn = conn;
    }

    /**
     * Creates a new short URL document in the database.
     * @param {ShortUrl} shortUrl - The short URL data to be saved.
     * @returns {Promise<import('mongoose').Document>} The saved short URL document.
     */
    createShortUrl = async (shortUrl) => {
        await this.conn.connect();
        console.log(shortUrl);
        const shortUrlDoc = new ShortUrlModel({
           ...shortUrl,
           expirationDate: new Date(shortUrl.expirationDate), // Convert to ISO string  
    });
     
        await shortUrlDoc.save();
        await this.conn.disconnect();
        return shortUrlDoc;
    };

    getShortUrlList = async () => {
        await this.conn.connect();
        const shortUrlList = await ShortUrlModel.find({});
        await this.conn.disconnect();
        return shortUrlList;
    };

    findByCode = async (shortUrlCode) => {
        await this.conn.connect();
        const shortUrl = await ShortUrlModel.findOne({ shortUrlCode });
        await this.conn.disconnect();
        return shortUrl;
    };

    useShortUrl = async (shortUrl) => {
        await this.conn.connect();
        const UpdateshortUrl = await ShortUrlModel.findOneAndUpdate(
            { shortUrlCode: shortUrl.shortUrlCode },
            { $inc: { accessCount: 1 } },
            { new: true }
        );
        await this.conn.disconnect();
        return UpdateshortUrl;
    };

   
}

module.exports = shortUrlRepository;