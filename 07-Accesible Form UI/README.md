# FORM UI

En este proyecto, tu requieres crear un formulario con UI usando unicamente HTML y CSS. El formulario debe incluir campos para un nombre completo, email, password y una contraseña de confirmacion, junto con un botón para alternar la visibilidad del texto de la contraseña. Adicionalmente, el formulario debe contar con una barra de progreso de completitud y una lista de verificacion de requerimientos que deben cumplirse para que el formulario alcance el 100% de completitud. Si bien esta version del formulario no debe ser funcional, sera un componente UI estatico que podra mejorar con javascript en el futuro.  
La meta de este proyecto no es unicamente ayudarte a practicar tu HTML y CSS, si no ademas para enfocarte en crear un formulario accesible que sea facil de usar por todos los usuarios, incluyendo aquellos con discapacidades.
Debajo esta el mockup aproximado de la interfaz de usuario del formulario que debes crear:

![Formulario Mockup](/07-Accesible%20Form%20UI/mockup-form.png)
## Pautas de accesibilidad
Debes leer las pautas de accesibilidad y las mejores practicas antes de iniciar este proyecto.Sin embargo, aqui esta algunos puntos claves a mantener en mente al crear una interfaz de formulario accesible

- Etiquetado:
Asegurese que cada campo del formulario tenga su correspondiente elemento <label> que este claramente asociado con el campo usando el atributo for.

- Estado de Enfoque:
Diseñe el estado de enfoque de cada campo de entrada para que los usuarios que navegan con un teclado pueda ver facilmente que campo esta activo actualmente

- Mensaje de error
Considera agregar espacio para mensajes de error que puedan ser mostrados cuando un usuario ingrese datos invalidos. Estos mensajes deben estar claramente asociados con el campo de entrada correspondiente.

- Atributos ARIA
Utilice atributos ARIA(Accesible Rich Internet Applitcations ó Aplicaciones de Internet Enriquecidas Accesibles) donde sea necesario. Como aria-required para campos obligatorios y aria-invalid para campos con errores.

- Contraste de color
Asegurese que el contraste de color entre el texto y el fondo es suficiente para cumplir con el estandar WCAG(Web Content Accesibility Guidelines), haciendo legible el formulario para usuarios con discapacidades visuales

- Elmentos interactivos
Asegurese que el boton para mostrar/ocultar la contraseña sea accesible a través del teclado y lectores de pantalla, y propoporcione informacion clara sobre el esatdo actual(Ejemplo: Password esta oculta" or password esta visible");

Una vez listo, puedes testear la interfaz de usuario del formulario usando un lector de pantalla o extensiones e navegador como Axe O Lighthouse para verificar problemas de accesibilidad y realizar los ajustes necesarios.

