class ShortURLInterface {
  async createShortUrl(url) {
    throw new Error('Method not implemented');
  }

  async getShortUrlList() {
    throw new Error('Method not implemented');
  }

  async findByCode(shortUrlCode) {
    throw new Error('Method not implemented');
  }

  async useShortUrl(shortUrl) {
    throw new Error('Method not implemented');
  }

}

module.exports = ShortURLInterface;