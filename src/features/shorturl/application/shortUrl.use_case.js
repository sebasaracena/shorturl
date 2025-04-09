
class ShortUrlUseCase {
  constructor(shortUrlRepository) {
    this.shortUrlRepository = shortUrlRepository;
  }

   createShortUrl=async(shortUrl)=> {
    const shortUrl1 = await this.shortUrlRepository.createShortUrl(shortUrl);
    return shortUrl1;
  }

    getShortUrlList= async()=> {
        const shortUrls = await this.shortUrlRepository.getShortUrlList();
        return shortUrls;
    }

    findByCode= async(shortUrlCode)=> {
        const shortUrl = await this.shortUrlRepository.findByCode(shortUrlCode);
        return shortUrl;
    }

    useShortUrl=async(shortUrl)=> {
        const UseshortUrl = await this.shortUrlRepository.useShortUrl(shortUrl);
        return UseshortUrl;
    }


}

module.exports = ShortUrlUseCase;