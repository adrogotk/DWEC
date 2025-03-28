# VIDEOCLUB
![DiseñoBase](https://github.com/user-attachments/assets/6f06d72f-5d50-4c4b-9eb3-a03ee224e077)
![Speedhive1](https://github.com/user-attachments/assets/e436b20d-aa8a-4389-9ff3-22f8ff96a211)
![Speedhive2](https://github.com/user-attachments/assets/04ec401b-2fab-4cc2-8bee-c5ce27242ed2)
![Speedhive3](https://github.com/user-attachments/assets/95ee96f2-7769-4388-8206-2ed1df7932a0)





## Form 1

![Interfaces1](https://github.com/user-attachments/assets/5b411bb1-f035-4d0a-8b8a-d62468f00586)

En este formulario se realiza la conexión a la BD. El Sistema Gestor de Bases de datos utilizado es SQLite. Además mediante un temporizador, podemos desplazarnos al formulario principal si el usuario no ha pulsado click


## Form 2

![Interfaces2](https://github.com/user-attachments/assets/80303aaa-2f84-410d-8b1c-dd32eee368eb)

En este formulario se realiza la gestión de las películas. Se puede presentar de varios modos, Agregar, modificar, eliminar y consultar, segun la opción de menú seleccionada. 
En caso de agregar tendremos habilitados los campos de texto, excepto el ID, que se genera automáticamente y cuando todos esten completos (Si no aparece un mensaje de error) pulsamos aceptar para agregar la película a la BD. Con cancelar en esta y en 
el resto de opciones, limpiamos las cajas de texto
En caso de modificar, inicialmente, tendremos habilitado solo el id. Cuando introduzcamos el identificador y pulsemos la lupa, si existe la película, se habilitarán el resto de elementos del formulario, que tendran como valores
los datos originales de la película con el id seleccionado. Estos se pueden modificar y al pulsar aceptar, se actualizará la película en la BD.
En caso de eliminar, el procedimiento sería el mismo que en modificar, solo que no tendremos habilitados el resto de campos distintos al id en ningún momento. Cuando pulsemos aceptar, nos aparece un mensaje de confirmación, en el cual
si seleccionamos que si, se borra el registro, con el ID indicado de la BD
En caso de consultar, el procedimiento sería el mismo que eliminar, solo que con las opciones de aceptar y cancelar deshabilitadas, ya que si se desea hacer una modificación o borrado de esos datos, hay que desplazarse a la opción de menú 
correspondiente.


## Form 3

![Interfaces3](https://github.com/user-attachments/assets/7ef3f65b-8ef7-41d9-8baf-c759655a80eb)
Este formulario contiene un listado originalmente vacio, en el cual, las columnas, según el modo seleccionado, contendran los datos que se van a mostrar. Las filas se rellenaran con los registros que haya de la tabla correspondiente en BD.
Además desde el menú podemos acceder a distintos filtros en los cuales, aparece el mismo formulario pero con la caja de texto superior habilitada, para poder escribir texto y dejar en el listado solo los registros que en la columna correspondiente
al fltro, contengan la cadena de texto introducida.


## Form 4
![Interfaces6](https://github.com/user-attachments/assets/79d141cb-007c-457f-84ab-9f16f77d5dfb)
Este formulario contiene los créditos de la aplicación y un boton, el cual, al pulsarlo, descarga en tu equipo un pdf con el manual de ayuda (o manual de usuario) de la aplicación


## Form 5

![Interfaces4](https://github.com/user-attachments/assets/e5ca3daa-2785-4d37-917d-bad86ab74d0f)

En este formulario se realiza la gestión de los socios. Se puede presentar de varios modos, Agregar, modificar, eliminar y consultar, segun la opción de menú seleccionada. 
En caso de agregar tendremos habilitados los campos de texto, excepto el ID, que se genera automáticamente y cuando todos esten completos (Si no aparece un mensaje de error) pulsamos aceptar para agregar el socio a la BD. 
En caso de modificar, inicialmente, tendremos habilitado solo el id. Cuando introduzcamos el identificador y pulsemos la lupa, si existe el socio, se habilitarán el resto de elementos del formulario, que tendran como valores
los datos originales del socio con el id seleccionado. Estos se pueden modificar y al pulsar aceptar, se actualizará el socio en la BD.
En caso de eliminar, el procedimiento sería el mismo que en modificar, solo que no tendremos habilitados el resto de campos distintos al id en ningún momento. Cuando pulsemos aceptar, nos aparece un mensaje de confirmación, en el cual
si seleccionamos que si, se borra el registro, con el ID indicado de la BD
En caso de consultar, el procedimiento sería el mismo que eliminar, solo que con las opciones de aceptar y cancelar deshabilitadas, ya que si se desea hacer una modificación o borrado de esos datos, hay que desplazarse a la opción de menú 
correspondiente.


## Form 6

![Interfaces5](https://github.com/user-attachments/assets/ffc3b9d7-f028-4bfb-a73c-14449b417f25)
En este formulario se realiza la gestión de los préstamos. Se puede presentar de varios modos, Agregar, modificar, eliminar y consultar, segun la opción de menú seleccionada. 
En caso de alquilar, tendremos habilitados los campos de texto, excepto el ID, que se genera automáticamente y cuando todos esten completos (Si no aparece un mensaje de error) pulsamos aceptar para agregar el préstamo a la BD. 
En caso de modificar, inicialmente, tendremos habilitado solo el id. Cuando introduzcamos el identificador y pulsemos la lupa, si existe el préstamo, se habilitarán el resto de elementos del formulario, que tendran como valores
los datos originales del préstamo con el id seleccionado. Estos se pueden modificar y al pulsar aceptar, se actualizará el préstamo en la BD.
En caso de devolver, el procedimiento sería el mismo que en modificar, solo que no tendremos habilitados el resto de campos distintos al id en ningún momento. Cuando pulsemos aceptar, nos aparece un mensaje de confirmación, en el cual
si seleccionamos que si, se borra el registro, con el ID indicado de la BD
En caso de consultar, el procedimiento sería el mismo que eliminar, solo que con las opciones de aceptar y cancelar deshabilitadas, ya que si se desea hacer una modificación o borrado de esos datos, hay que desplazarse a la opción de menú 
correspondiente.

## Usabilidad

En la realización de esta aplicacion, se han tenido en cuenta, las 10 reglas más importantes de la usabilidad, de la siguiente manera:

1.Visibilidad del estado del sistema: Mediante la gestion del modo y su inclusion en el titulo del formulario, el usuario sabe en todo momento donde está.

2.Utilizar el lenguaje de los usuarios: Para los textos visibles, se han seleccionado palabras entendibles y comunes entre los usuarios, como "Alquilar prestamo" o "Devolver prestamo" en vez de "Agregar Prestamo"
o "Eliminar Prestamo".

3.Control y libertad para el usuario: Todos los formularios disponen de la opción "Cancelar" que limpia el formulario. Además, en caso de que vayan a eliminar algo que no quieran suprimir, pueden cancelar el borrado
seleccionando "No" en el mensaje de confirmación.

4.Consistencia y estándares: Cada acción principal se asocia con una opción del menú concreta, para que no haya multiples acciones en un mismo modo. También se usan los mismos términos para cada apartado
a lo largo de la parte visual de toda la aplicación.

5.Prevención de errores: Se han agregado comprobaciones que evitan errores de casting, formato o, a futuro, campos requeridos vacios, sustituyendo esos errores por mensajes de error.

6.Minimizar la carga de la memoria del usuario: Tanto en eliminar, como en modificar, simplemente con introducir el ID y pulsar la lupa se rellenan el resto de campos, sin que haya que memorizarlos.

7.Flexibilidad y eficiencia de uso: En el menú del formulario principal y en los formularios de operaciones, se encuentran todas las acciones que puedes realizar en la aplicación. En los lugares donde ese menú no existe,
está presente un boton para volver al formulario principal.

8.Los diálogos estéticos y diseño minimalista: El uso de diálogos esta reducido a mensajes emergentes que aparecen cuando ocurre la acción correspondiente, y estos no ocupan más de 1 linea.

9.Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de los errores: Los mensajes de error, indican en lenguaje sencillo, cual ha sido la equivocación cometida por el usuario, para que lo pueda remediar.

10.Ayuda y documentación: El desarrollo se ha realizado de manera que la aplicación sea sencilla de manejar, ya que el flujo con socios, peliculas y prestamos es idéntico, al igual que el procedimiento de los 
distintos listados. Además en Acerca De se incluye un manual de usuario

