# Prueba automatizada para ejecutar una petición get y post

# ![Serenity-js](docs/serenity-js.png "Logo Title Text 1")

## Framework
* Serenity-js: Es un marco de Node.js diseñado para hacer que las pruebas de aceptación y regresión de aplicaciones modernas de pila completa sean más rápidas, más colaborativas y más fáciles de escalar.
## Patron de desarrollo
* Se utiliza Screenplay pattern ya que esta centrado en el usuario y orientado a tareas, utiliza los principios S.O.L.I.D. Con screenplay se puede escribir el codigo en un lenguaje mas natural.
## Herramientas de compilación 
# ![Node-js](docs/node-js.png "Logo Title Text 1")
### Node-js
* Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, el cual está basado en el motor V8 de Google.
# ![NPM](docs/npm.png "Logo Title Text 1")
### NPM
* Es el sistema de gestión de paquetes por defecto para Node.js
# ![Cucumber-js](docs/cucumber-js.png "Logo Title Text 1")
### Cucumber-js
* Es una herramienta que permite escribir los casos de prueba en lenguaje gherkin.
# ![Typescript](docs/typescript.png "Logo Title Text 1")
### Typescript
* TypeScript es un lenguaje de programación desarrollado y mantenido por Microsoft. Es un superconjunto sintáctico estricto de JavaScript y agrega escritura estática opcional al lenguaje. TypeScript está diseñado para el desarrollo de aplicaciones grandes y transcompila a JavaScript.
## La estructura completa del proyecto es la siguiente:
* Features: Utiliza lenguaje Gherkin y contienen los escenarios de negocio del caso de prueba. 
* Tasks: Clases que representan tareas que realiza el actor a nivel de proceso de negocio. 
* Builders: Patron que permite crear un objeto de una forma más dinámica.
* Questions: Comprueban los resultados de las operaciones realizadas. 
* Interfaces: Es una clase abstracta que se utiliza para agrupar métodos relacionados con cuerpos vacíos.
* DTOS: Serializan las respuestas de las peticiones de los servicios rest.
# Requerimientos
* Node v16.13.1
* npm 8.3.0
# Comandos para ejecutar el proyecto.
* npm install
* npm test
## Autor
Juan Francisco Builes Montoya - juanfranciscobumo@gmail.com
