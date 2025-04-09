const ShortUrl = require('../../domain/shortUrl.entitie');
const ShortUrlInterface = require('../../domain/shortUrl.interface');
const { generateShortUrl,parseDate } = require('../utils/shortUrl.utils');	

const  URL="http://localhost:3000/api/dte/get?dteId=";

class shortUrlRepositoryImpl extends ShortUrlInterface {
  constructor(shortUrlInterface) {
    super();
    this.shortUrlInterface = shortUrlInterface;
   
  }

   createShortUrl= async(shortUrl)=> {
    // Log para depuración
    const originalUrl = URL + shortUrl.dteId;
    const shortUrlCode = generateShortUrl(shortUrl.originalUrl);
    const expirationDate = parseDate(shortUrl.expirationDate);
    if (!expirationDate) {
      throw new Error('Invalid expirationDate format. Use DD/MM/YYYY or DD-MM-YY.');
  }
    const NewshortUrl = new ShortUrl(shortUrlCode,originalUrl, shortUrl.dteId, expirationDate, shortUrl.maxUses, shortUrl.accessCount);
    return await this.shortUrlInterface.createShortUrl(NewshortUrl);
    //return "ok";
  }

  getShortUrlList= async()=> {
    console.log('||------getShortUrlList called--------||');// Log para depuración
    return await this.shortUrlInterface.getShortUrlList();
  }

  findByCode= async(shortUrlCode)=> {
    console.log('||----findBycode :', shortUrlCode,'------||'); // Log para depuración
    return await this.shortUrlInterface.findByCode(shortUrlCode);
  }

  useShortUrl=async(shortUrl)=> {
    console.log('||----useShortUrl :', shortUrl.shortUrlCode,'------||'); // Log para depuración
    const checkShortUrl= new ShortUrl(shortUrl.shortUrlCode, shortUrl.originalUrl, shortUrl.dteId, shortUrl.expirationDate, shortUrl.maxUses, shortUrl.accessCount);
    checkShortUrl.incrementUsage();
    return await this.shortUrlInterface.useShortUrl(checkShortUrl);
  }

}

module.exports = shortUrlRepositoryImpl;