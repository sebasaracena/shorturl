# ShortURL

ShortURL es un proyecto que permite acortar URLs. Este README proporciona una descripción general de cómo funciona el proyecto, cómo utilizar los endpoints disponibles y describe la arquitectura utilizada.

## Arquitectura

Este proyecto está diseñado utilizando la **Arquitectura Hexagonal** e implementa el **Patrón de Característica (Feature Pattern)**. La Arquitectura Hexagonal permite una separación clara de las preocupaciones, facilitando la mantenibilidad y escalabilidad del código. El Patrón de Característica organiza el código en torno a las características del dominio, agrupando el código relacionado (como controladores, servicios y repositorios) en un solo lugar.

## Requisitos Previos

- Node.js
- MongoDB

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/sebasaracena/shorturl.git# shorturl

## Cómo correr el proyecto con Docker

1. Asegúrate de tener Docker y Docker Compose instalados en tu máquina.
2. Construye y corre los servicios utilizando Docker Compose:
    ```bash
    docker-compose up --build
    ```
3. Accede a la aplicación en tu navegador en `http://localhost:3000`.
 
## Endpoints - ShortURL

### 1. Crear un ShortURL
**Descripción:** Este endpoint permite crear una URL acortada.

- **Método:** POST  
- **URL:** `/api/shorturl/create`  
- **Cuerpo de la solicitud (JSON):**
    ```json
    {
         "dteId": "DTE-2025-04-08-002",
        "expirationDate": "31-12-2025",
        "maxUses": 2
    }
    ```
- **Respuesta exitosa (JSON):**
    ```json
   {
	"shortUrlCode": "http://short.url/_tow8NE_",
	"dteId": "DTE-2025-04-08-002",
	"originalUrl": "http://localhost:3000/api/dte/get?dteId=DTE-2025-04-08-002",
	"expirationDate": "2025-12-31T00:00:00.000Z",
	"maxUses": 2,
	"accessCount": 0,
	"_id": "67f5dca67f06dc79ff69de26",
	"__v": 0
    }
    ```

### 2. Redirigir al URL original
**Descripción:** Este endpoint toma el dato guardado del shortUrl y este registra cuantas veces se uso, tambien si este encuentra que la fecha esta caducada arroja un error.

- **Método:** GET  
- **URL:** `api/shorturl/use`  
- **Param** `shortUrlCode=http://short.url/MEJnoqkV`  
- **Parámetros de ruta:**
    - `shortUrlCode` - Es el shorUrlCode generado un vez leido el DTE.
- 
- **Respuesta:** 
  ```json
   {
	"shortUrlCode": "http://short.url/_tow8NE_",
	"dteId": "DTE-2025-04-08-002",
	"originalUrl": "http://localhost:3000/api/dte/get?dteId=DTE-2025-04-08-002",
	"expirationDate": "2025-12-31T00:00:00.000Z",
	"maxUses": 2,
	"accessCount": 0,
	"_id": "67f5dca67f06dc79ff69de26",
	"__v": 0
    }
    ```

### 3. Obtener estadísticas de un ShortURL
**Descripción:** Este endpoint proporciona estadísticas sobre un ShortURL, como el número de clics.

- **Método:** GET  
- **URL:** `/api/shorturl/:code/stats`  
- **Parámetros de ruta:**
    - `:code` - El código único generado para la URL acortada.
- **Respuesta exitosa (JSON):**
    ```json
    {
        "shortUrl": "http://localhost:3000/abc123",
        "originalUrl": "https://example.com",
        "clicks": 42
    }
    ```