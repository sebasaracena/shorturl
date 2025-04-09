# ShortURL

ShortURL es un proyecto que permite acortar URLs. Este README proporciona una descripción general de cómo funciona el proyecto, cómo utilizar los endpoints disponibles y describe la arquitectura utilizada.

## Arquitectura

Este proyecto está diseñado utilizando la **Arquitectura Hexagonal** e implementa el **Patrón de Característica (Feature Pattern)**. La Arquitectura Hexagonal permite una separación clara de las preocupaciones, facilitando la mantenibilidad y escalabilidad del código. El Patrón de Característica organiza el código en torno a las características del dominio, agrupando el código relacionado (como controladores, servicios y repositorios) en un solo lugar.

## ¿Por qué se utilizó la Arquitectura Hexagonal?

La Arquitectura Hexagonal fue seleccionada para este proyecto debido a sus múltiples beneficios en términos de diseño y mantenibilidad. Esta arquitectura permite:

1. **Separación de preocupaciones:** Divide el código en capas bien definidas, separando la lógica de negocio de los detalles de infraestructura, como bases de datos o frameworks.

2. **Facilidad para realizar pruebas:** Al desacoplar la lógica de negocio, es más sencillo realizar pruebas unitarias y de integración sin depender de componentes externos.

3. **Escalabilidad:** La estructura modular facilita la incorporación de nuevas funcionalidades o la modificación de las existentes sin afectar otras partes del sistema.

4. **Adaptabilidad:** Permite cambiar tecnologías o herramientas (como bases de datos o frameworks) sin impactar la lógica central del negocio.

5. **Mantenibilidad:** La organización clara del código reduce la complejidad y facilita el trabajo en equipo, especialmente en proyectos de largo plazo.

En este proyecto, la Arquitectura Hexagonal asegura que la lógica de negocio relacionada con la generación y gestión de URLs acortadas sea independiente de los detalles técnicos, como el almacenamiento en MongoDB o la exposición de endpoints a través de una API REST.

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

### 1. Poblar automáticamente la colección DTE

El archivo `docker-compose.yml` incluye una configuración que permite inicializar automáticamente la colección `dte` en MongoDB al levantar los servicios. Esto se realiza mediante el archivo `init-dte.js`, ubicado en la ruta `./src/config/data/init.dte.js:/docker-entrypoint-initdb.d/init-dte.js:ro`.

#### ¿Cómo funciona?

- Al iniciar los contenedores con Docker Compose, el archivo `init-dte.js` se ejecuta automáticamente como parte del proceso de inicialización de MongoDB.
- Este script inserta datos iniciales en la colección `dte`, asegurando que la base de datos tenga información disponible desde el inicio.

#### Relación con los Endpoints

Puedes verificar los datos iniciales insertados utilizando el endpoint [Obtener lista de DTEs generados](#4-obtener-lista-de-dtes-generados). Este endpoint te permitirá consultar todos los DTEs disponibles en la colección.

#### Beneficios

- **Ahorro de tiempo:** No es necesario insertar manualmente los datos iniciales.
- **Consistencia:** Garantiza que la colección `dte` tenga un conjunto de datos predefinido para pruebas o desarrollo.

Para más detalles sobre cómo consultar los DTEs generados, revisa el endpoint mencionado anteriormente.

### 2. Crear un ShortURL
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

### 3. Redirigir al URL original
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

### 4. Obtener Lista de un ShortURL generados
**Descripción:** Este endpoint proporciona la lista ShortURL generados.

- **Método:** GET  
- **URL:** `/api/shorturl/get-list`  
- **Respuesta exitosa (JSON):**
  ```json
        [
	{
		"_id": "67f5e4bc1c66caee0ae5b93b",
		"shortUrlCode": "http://short.url/QPj3zNOh",
		"dteId": "DTE-2025-04-08-002",
		"originalUrl": "http://localhost:3000/api/dte/get?dteId=DTE-2025-04-08-002",
		"expirationDate": "2025-12-31T00:00:00.000Z",
		"maxUses": 2,
		"accessCount": 0,
		"__v": 0
	},
	{
		"_id": "67f5e5061c66caee0ae5b948",
		"shortUrlCode": "http://short.url/N1PqF9Z3",
		"dteId": "DTE-2025-04-08-002",
		"originalUrl": "http://localhost:3000/api/dte/get?dteId=DTE-2025-04-08-002",
		"expirationDate": "2025-04-09T00:00:00.000Z",
		"maxUses": 2,
		"accessCount": 0,
		"__v": 0
	}
]
        ```
### 4. Obtener lista de DTEs generados
**Descripción:** Este endpoint proporciona una lista de todos los DTEs generados.
**Observación**  es necesario ejecutar este end point para poder insertar el shortUrl ya que necesita del dato dteID

- **Método:** GET  
- **URL:** `/api/dte/getList`  
- **Respuesta exitosa (JSON):**

      ```json
      [
          {
              "dteId": "DTE-2025-04-08-001",
              "tipoDocumento": "Factura Electronica",
              "folio": "123",
              "emisor": {
                  "rut": "761234567",
                  "razonSocial": "Universidad de Ejemplo A"
              },
              "receptor": {
                  "rut": "127890123",
                  "razonSocial": "Empresa Alfa"
              },
              "fechaEmision": "2025-04-08",
              "montoNeto": 15000,
              "iva": 2850,
              "montoTotal": 17850
          },
          {
              "dteId": "DTE-2025-04-08-002",
              "tipoDocumento": "Boleta Electronica",
              "folio": "456",
              "emisor": {
                  "rut": "769876543",
                  "razonSocial": "Universidad de Ejemplo B"
              },
              "receptor": {
                  "rut": "111111111",
                  "razonSocial": "Consumidor Final"
              },
              "fechaEmision": "2025-04-08",
              "montoNeto": 5000,
              "iva": 950,
              "montoTotal": 5950
          }
      ]
      ````
 ¡Perfecto! Acá tenés el texto transformado en una sección clara para un archivo `README.md`, con formato Markdown, limpio y profesional:

---

## 📘 Lógica de Validación de ShortURLs

Este proyecto implementa una arquitectura hexagonal, y una de sus piezas clave es la entidad `ShortUrl.entitie.js`, que contiene funciones fundamentales para el control de uso y validez de los enlaces acortados.

A continuación, se explica el propósito y funcionamiento de las funciones `incrementUsage` y `expirationDateIsValid`.

---

### 1. `incrementUsage()`

Esta función gestiona el número de usos permitidos de un ShortURL y valida si aún puede ser utilizado.

#### 🧠 Lógica:
- Verifica si el enlace puede seguir siendo usado mediante:
  - El método `canBeUsed`, que compara el uso actual (`accessCount`) con el límite (`maxUses`).
  - El método `expirationDateIsValid`, que valida si el enlace no ha expirado.
- Si ambas condiciones se cumplen, incrementa el contador `accessCount`.

#### 🎯 Propósito:
- Garantizar que un enlace corto no se utilice más veces de lo permitido.
- Evitar el uso de enlaces que ya han expirado.
- Mantener la integridad y seguridad del sistema.

---

### 2. `expirationDateIsValid()`

Esta función valida si el ShortURL aún es válido en función de su fecha de expiración.

#### 🧠 Lógica:
- Compara la fecha actual (`currentDate`) con la fecha de expiración (`expirationDate`).
- Devuelve `true` si la fecha actual es anterior a la de expiración.
- Devuelve `false` si el enlace ya ha expirado.

#### 🎯 Propósito:
- Restringir el uso de enlaces cortos una vez alcanzada su fecha de vencimiento.
- Implementar restricciones temporales sobre el uso de los ShortURLs.

---

### 🔗 Relación entre ambas funciones

`incrementUsage()` **depende de** `expirationDateIsValid()` para garantizar que:

- El enlace no supere el número máximo de usos permitidos (`maxUses`).
- El enlace no se utilice después de su fecha de expiración (`expirationDate`).

Estas funciones trabajan en conjunto para asegurar una experiencia controlada, segura y confiable.

---

### 🧪 Ejemplos de Uso

| Caso | Descripción |
|------|-------------|
| ✅ Caso 1 | El enlace aún no ha expirado y no ha alcanzado su límite de uso. Se incrementa el contador. |
| ❌ Caso 2 | El enlace ha alcanzado el número máximo de usos permitidos. No se incrementa el contador. |
| ❌ Caso 3 | El enlace ha expirado. No se permite el uso. |

---

### 🔐 Seguridad

Estas validaciones son esenciales para:
- Evitar abusos en el sistema.
- Controlar el acceso a los enlaces acortados.
- Respetar las restricciones definidas por el creador del enlace.

---

### Observacion ###
Estas reglas se definen en el dominio y se invocan desde la capa de infraestructura a través del adaptador. Si alguna de estas funciones alcanza su límite, el uso del ShortURL correspondiente no está permitido el sistema arrojara un mensaje de error.

   

