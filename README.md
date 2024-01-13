# peticiones-http
**fetch** y **Axios** son las dos herramientas más populares para hacer peticiones HTTP.  
Por cualquiera de los dos métodos las peticiones se ejecutan a través de **promesas** porque son **procesos asíncronos**.

## Promesas
Las promesas de JavaScript son un medio para gestionar los procesos asíncronos. Un proceso asíncrono es aquel que no sabemos cuánto va a tardar en terminarse. Las promesas son acciones que no van a esperar a que suceda algo para que el intérprete de JavaScript continúe leyendo.

## fetch

fetch es un método del objeto _window_, o sea que para utilizarlo no tenemos que instalar nada.  
Simplemente hacemos el llamado escribiendo **fetch(url)** y esto nos devuelve una promesa con la respuesta. En el caso de hacer una petición http GET, el único parámetro obligatorio que recibe fetch es la URL.

Para extraer el body de la respuesta tendremos que usar el metodo _.json()_. Y con ese valor retornado obtendremos otra promesa en donde viajan los datos que pedimos, accedemos a ellos con _.then_ y utilizando la respuesta pasada por parámetro, en este caso le pusimos _data_:

```js
fetch('https://pokeapi.co/api/v2/pokemon')
   .then(response => response.json())
   .then(data => {console.log(data)})
   .catch(err => console.log(err));
```
## Axios
Es una librería de JavaScript para realizar peticiones http, tenemos que instalarla en nuestro proyecto:

`npm install axios`  


Si vamos a hacer una petición GET, sólo debemos llamar al método desde axios agregándole _.get(url)_ :

```js
axios.get(url)
   .then(response => console.log(response.data))
   .catch(err => console.log(err));
```

La libreria **Axios** directamente nos provee de la respuesta, y tan solo tenemos que indicarle que queremos el data de la respuesta y ya tenemos los datos que pedimos.

## ¿fetch o Axios?
Si lo que queremos es crear un proyecto con 0 dependencias **fetch** es la herramienta más deseable porque no hay que instalar ninguna dependencia. Al crear un proyecto con muchas dependencias estamos dependiendo de estas librerías y esto puede hacer que partes de nuestro código dejen de funcionar porque dejen de actualizarse esas librerías.

Pero **Axios** es más potente que fetch porque es una librería y no un sólo método. Por ejemplo, nos brinda el uso de interceptores en las peticiones http.  
Otra ventaja es que no tenemos que convertir el cuerpo de la solicitud en una cadena JSON. Hace más con menos código, sólo necesita una devolución de llamada .then() para acceder a los datos JSON solicitados.  
Además tiene un mejor manejo de errores, arroja errores por nosotros a diferencia de fetch donde los tenemos que arrojar nosotros.  
Y por último, se puede utilizar tanto en el servidor como en el cliente.

Es mejor usar **Axios** en un proyecto grande para ejecutar acciones recurrentes y usar **fetch** en un proyecto pequeño para acciones puntuales y concretas.

## Bibliografía

Elegir entre Fetch o Axios  
https://keepcoding.io/blog/fetch-o-axios/

Fetch api vs Axios  
https://somospnt.com/blog/217-agustin-luna

Promesas en frontend JavaScript  
https://keepcoding.io/blog/promesas-en-frontend-javascript/

Cómo usar Axios con React: La guía definitiva (2021)  
https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/
