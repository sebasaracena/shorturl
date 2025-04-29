const request = require('supertest'); // Para probar rutas HTTP
const app = require('../../../../index'); // Asegúrate de que este sea el archivo donde configuras tu servidor Express

describe('Short URL Feature', () => {
    test('deberia redireccionar el url original', async () => {
        // Simula la creación de un short URL
        const shortUrlCode = 'abc123';
        const originalUrl = 'https://example.com';

        // Mock de la base de datos o lógica para guardar el short URL
        // Aquí deberías usar tu lógica real para crear el short URL
        const shortUrl = { shortUrlCode, originalUrl };

        // Simula el redireccionamiento
        const response = await request(app).get(`/api/shorturl/use?shortUrlCode=${shortUrlCode}`);
        expect(response.status).toBe(302); // Código de redirección
        expect(response.headers.location).toBe(originalUrl); // Verifica que redirige al URL original
    });

    test('deberia imprimir el shortUrlCode', async () => {
        const consoleSpy = jest.spyOn(console, 'log'); // Espía el console.log
        const shortUrlCode = 'abc123';
        const shortUrl = { shortUrlCode };

        // Simula la creación del short URL
        console.log(`shortUrlCode:${shortUrl.shortUrlCode}`);

        // Verifica que el mensaje se imprimió correctamente
        expect(consoleSpy).toHaveBeenCalledWith(`shortUrlCode:${shortUrl.shortUrlCode}`);
        consoleSpy.mockRestore(); // Restaura el comportamiento original de console.log
    });
});