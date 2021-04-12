# Practica 6: Fundamentos de React

Wallafake es una aplicación de front-end construida con la libreria React que simula las funcionalidades básicas de un sitio de compra-venta de artículos de segunda mano, ya sea que quieras vender algo o estes en busca de un producto.

### Requerimientos

1 - Descarga o clona el repositorio con git clone.

2 - Descargar las dependencias necesarias para su funcionamiento, en la carpeta del back-end que es la carpeta raíz del proyecto (practica6_react_wallafake) y en la carpeta **client** del front-end (practica6_react_wallafake/client).

```
npm i
```

3 - Crea un cluster _Tier Free_ en Mongo DB: https://www.mongodb.com/cloud/atlas/register

4 - Crea un archivo _.env_ en la raíz del proyecto siguiendo el ejemplo del archivo _.env_sample_.

5 - Arranca la aplicaicón desde la carpeta raíz del proyecto con:

```
npm run dev
```

**importante:** Si utilizas un Mac con _Apple Silicon_ cambia la linea _#9_ en el archivo _package.json_ en la raíz de la carpeta del proyecto, por la siguiente:

```
 "client": "env FAST_REFRESH=false npm start --prefix client",
```

6 - Registra un usuario con una contraseña minima de 6 caracteres y comienza a usar la aplicación.
