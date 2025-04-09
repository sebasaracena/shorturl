const crypto= require('crypto');

const generateShortUrl = (url) => {
   const timestamp = Date.now().toString(); // Add a timestamp to ensure uniqueness
   const hash = crypto.createHash('sha256').update(url + timestamp).digest('base64url').substring(0, 8);
   
   const baseUrl = 'http://short.url/';
   const shortUrl = `${baseUrl}${hash}`;
   return shortUrl;
}

const parseDate = (dateString)=> {
   let date;

   // Detecta el formato basado en los separadores
   if (dateString.includes('/')) {
       // Formato DD/MM/YYYY
       const [day, month, year] = dateString.split('/').map(Number);
       date = new Date(year, month - 1, day); // Los meses son 0-indexados
   } else if (dateString.includes('-')) {
       // Formato DD-MM-YYYY o DD-MM-YY
       const [day, month, year] = dateString.split('-').map(Number);
       const fullYear = year < 100 ? 2000 + year : year; // Convierte YY a YYYY si es necesario
       date = new Date(fullYear, month - 1, day); // Los meses son 0-indexados
   } else {
       throw new Error('Invalid date format. Use DD/MM/YYYY or DD-MM-YY.');
   }

   // Verifica si la fecha es válida
   if (isNaN(date.getTime())) {
       throw new Error('Invalid date format. Use DD/MM/YYYY or DD-MM-YY.');
   }

   return date;
}

module.exports= {
   generateShortUrl,
   parseDate
}