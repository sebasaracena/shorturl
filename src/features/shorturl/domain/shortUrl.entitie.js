
class shortUrl {
  constructor(shortUrlCode,originalUrl,dteId,expirationDate,maxUses,accessCount) {

     this.shortUrlCode = shortUrlCode;
     this.originalUrl = originalUrl;
     this.dteId= dteId;
     this.expirationDate = expirationDate;
     this.maxUses = maxUses;
     this.accessCount = accessCount;

    }

    canBeUsed() {
      return this.accessCount < this.maxUses;
  }

   expirantionDateIsValid() {
      const currentDate = new Date();
      return new Date(this.expirationDate) > currentDate;
   }
  // Incrementa el contador de uso
    incrementUsage() {
      if (!this.canBeUsed()) {
          throw new Error('El shortUrlCode ha alcanzado el límite máximo de usos.');
      }
      if (!this.expirantionDateIsValid()) {
          throw new Error('El shortUrlCode ha expirado.');
      }
      this.accessCount += 1;
  }
}

module.exports= shortUrl;