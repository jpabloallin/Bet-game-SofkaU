# SOFKA-U cantera nivel 2

### Ejecución.

Ejecutar el servidor con el siguiente comando en la consola `npm run debug`, el servidor inicia por defecto en el puerto 3000.

La ruta raiz para usar la api en local es: 'http://:localhost:3000', en caso de modificar el número del puerto, esta ruta cambiara su número.

### Paquetes

El documeto `app.js` tiene las configuraciones del servidor (puerto, servidor, framework, base de datos, etc).

- [routes] - Contiene las rutas.
- [controllers] - Contiene el controlado gameControllers.
- [models] - Contiene el modelo game.js.
- [public] - Contiene las imágenes, css y js.
- [views] - Contiene las vistas/plantillas con la información acerca de como usar la API.

### Base de datos

La app maneja una unica base de datos la cual es `mongoDB`.

## Rutas

GET `/` Renderiza un documento html de la página de inicio del juego.
```
http://localhost:3000/
```

GET `/` Renderiza un documento html con las instructiones para usar la API.
```
http://localhost:3000/instructions
```

GET `/allGames` Responde con un JSON con el historial total de juegos.
```
http://localhost:3000/allGames
```

GET `/:id` Responde con un JSON con la información de un juego, se debe enviar el ID a tráves de la petición.
```
http://localhost:3000/:id
```

POST `/createGame` Crear un juego, se debe enviar un JSON con la siguiente información.
```
 { "gamers":[ {"name": "gamer1", "bet" : 1},
              {"name": "gamer1", "bet" : 2},
              {"name": "gamer1", "bet" : 3} ] }
```

POST `startGame` Inicia un juego, el ID de la partida se debe enviar en el cuerpo de la petición(JSON), en caso de que la partida ya este en curso o finalizada retornara el mensaje correspondiente del estado.
```
{ "id": {"game id"} }
```

GET `winner/:id` Define el ganador de un juego de forma aleatoria, se debe enviar el ID de la partida en la petición para poder obtener el ganador de ese juego, es necesario que esta partida ya se encuentre en curso.
```
http://localhost:3000/winner/:id
```

@Author Juan Pablo Allin Cañas - jpac.647@gmail.com
@Version 0.0.0

"dependencies": {
    "bootstrap": "^5.1.3",
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "^3.1.6",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "mongodb": "^4.4.0",
    "mongoose": "^6.2.3",
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }

