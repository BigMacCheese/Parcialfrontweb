Juan David Martínez Moreno 201923416

# Instrucciones de ejecución:

1. Ejecutar el back en el puerto 3000.
2. Ejecutar el front como viene y aceptar la opción que se da de que se ejecute en el puerto 3001.

# Decisiones de diseño

Primero que todo, ocurrió un problema con el back proporcionado para el parcial y es que este no dejaba hacer ninguna request de HTTP por cuestiones de seguridad (en específico por una política llamada CORS). Por esto mismo, fue necesario deshabilitar esta política desde el back y se modificó el main.ts de la siguiente manera:

    const app = await NestFactory.create(AppModule); => const app = await NestFactory.create(AppModule, {cors: true});

De esta manera ya se podían hacer las peticiones.

Ahora, el desarrollo del login se hizo con una librería llamada axios, la cual permitía hacer las peticiones HTTP de una manera más simple, y para el login era necesario hacer un POST de la información recibida del formulario para validar el username y la contraseña. Por consiguiente, se recibía el rol y de esta manera se le daba acceso a una nueva vista haciendo uso de useNavigate.

En la nueva vista se puede ver dos partes, la lista de los libros en la izquierda y en la derecha la vista del detalle del libro. Esta parte fue la más desafiante ya que al dar click a un libro no se debía ir a otra vista a mostar el detalle sino permanecer en la misma vista. Para lograr esto simplemente se pasó por parametro el hook de estado del id del libro el cual fuera seleccionado a los demás componentes para que estos fueran capaces de modificar el valor de este. En otras palabras, libroslista.js tiene un hook de estado que guarda el valor del id del libro que se haya seleccionado, la función del hook de estado que modifica el id fue pasado a libro.js el cual modifica el id dependiendo del libro que haya seleccionado y, por último, el id del libro seleccionado es pasado como parametro a librodetalle.js, el cual recibe este id para hacer un get del libro seleccionado (/books/:id) y así poder renderizarlo en la parte derecha de esta vista.

Para la internacionalización, simplemente se creó una carpeta con los dos idiomas: español e inglés, los cuales contienen las traducciones de los dos idiomas para las labels fijas de la aplicación, es decir, de los textos fijos de todas las listas (login, catálogo de libro y detalle de libro).


