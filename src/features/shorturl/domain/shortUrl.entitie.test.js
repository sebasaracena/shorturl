const shortUrl = require('./shortUrl.entitie');

describe('shortUrl Entity', () => {
  let shortUrlInstance;

  beforeEach(() => {
    shortUrlInstance = new shortUrl(
      'http://short.url/abc123',
      'http://example.com',
      'DTE-2025-04-08-001',
      '2025-12-31T23:59:59.000Z', // expirationDate
      5, // maxUses
      0  // accessCount
    );
  });

  test('Debería retornar True si el shortUrl puede ser utilizado', () => {
    expect(shortUrlInstance.canBeUsed()).toBe(true);
  });

  test('Debería retornar false si alcanzo el limite de uso de la cuenta', () => {
    shortUrlInstance.accessCount = 5; // Simula que alcanzó el límite
    expect(shortUrlInstance.canBeUsed()).toBe(false);
  });

  test('Deberia retornar true si la fecha aun sigue vigente', () => {
    expect(shortUrlInstance.expirantionDateIsValid()).toBe(true);
  });

  test('Deberia retornar false si la fecha ha expirado', () => {
    shortUrlInstance.expirationDate = '2020-01-01T00:00:00.000Z'; // Fecha pasada
    expect(shortUrlInstance.expirantionDateIsValid()).toBe(false);
  });

  test('Realiza el incremento si es valido', () => {
    shortUrlInstance.incrementUsage();
    expect(shortUrlInstance.accessCount).toBe(1);
  });

  test('Arroja un mensaje de error si alcanza el limite maximo', () => {
    shortUrlInstance.accessCount = 5; // Simula que alcanzó el límite
    expect(() => shortUrlInstance.incrementUsage()).toThrow(
      'El shortUrlCode ha alcanzado el límite máximo de usos.'
    );
  });

  test('Arroja un mensaje de error si alcanza las fechas adecuadas', () => {
    shortUrlInstance.expirationDate = '2020-01-01T00:00:00.000Z'; // Fecha pasada
    expect(() => shortUrlInstance.incrementUsage()).toThrow(
      'El shortUrlCode ha expirado.'
    );
  });
});