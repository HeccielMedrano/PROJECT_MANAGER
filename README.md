# Proyecto reto I: Desarrollar un manejador de proyectos

Para el primer parcial se evaluara lo siguiente:

1) Estructura del proyecto (10 puntos).

2) Diagrama de clases que cubra todos los requerimientos solicitados (20 puntos).

3) Todas las rutas necesarias para que el proyecto funcione con base al modelo REST (20 puntos).

4) Wireframes del flujo del proyecto (20 puntos).

5) Diagrama de interacción que explique el flujo según los requerimientos. (20 puntos).

6) Imagen de Docker funcional en docker hub (10 puntos).

## Iniciando

Para testear el proyecto puedes usar el siguiente comando
```
npm start
```

### Usuario

El usuario que se proporciona para poder hacer utilización de tokens a través del login de la aplicación es:

* name : Arturo
* lastName : Castillo
* email : r@gmail.com
* password : 1234
* role : SCRUM_MASTER


## Pruebas

Para poder realizar pruebas sobre el proyecto, se utiliza el comando

```
npm test
```

No hace falta preocuparse de temas de tokens, se realizan automáticamente.


### Instalación

#### Mediante SSH

Usa el siguiente comando para clonar el repo con ssh:

```
git clone git@gitlab.com:a358193/manejador-proyectos.git
```

#### Mediante Docker

El proyecto se encuentra disponible [a través de Dockerhub](https://hub.docker.com/r/hecmeduach/administrador-de-proyectos)

El comando para su instalación en Docker es:
```
docker pull hecmeduach/administrador-de-proyectos
```

### Wireframes 

Para mayor comprensión de la estructura basado en los requerimientos especificados en el documento anexado a la asignación de este proyecto, aquí se muestran los debidos wireframes:

![Login](./public/resources/WIREFRAMES/Login.jpg)

![PantallaInicial](./public/resources/WIREFRAMES/PantallaInicial.jpg)

![PantallaEliminar](./public/resources/WIREFRAMES/PantallaEliminar.jpg)

![NuevoProyecto](./public/resources/WIREFRAMES/NuevoProyecto.jpg)

![NuevoMiembro](./public/resources/WIREFRAMES/NuevoMiembro.jpg)

### Diagrama de clases

De igual forma proporcionamos el diagrama de clases de la aplicación.

![Diagrama](./public/resources/Diagrama%20de%20clases.jpg)

### Diagrama de Interacción

Finalmente, se proporciona el diagrama de interacción correspondiente.

![Diagrama2](./public/resources/diagrama_secuencia.png)


## Autores

* **Emiliano Rivera     358193**

* **Erick Nevarez     357664**

* **Gerardo Jurado  273880**  

* **Héctor Medrano      361345**