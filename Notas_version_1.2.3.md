<center>

<h1> Notas de la versión 1.2.3 </h1>

</center>

  

Hola y bienvenido (8

  

Aquí sigo trabajando durante mis tiempos libres en este proyecto para continuar mejorando mis habilidades como programador y prendiendo mas sobre angular (aprendí recientemente lo útil que son los ViewChild y ViewVhildren entre otras cosas mas :D).

  

Sin mas por el momento pasamos a las mejoras implementadas en esta nueva versión

  

<br>

  

### *¡Mejoras y Validaciones en la vista previa de la cadena ingresada!*

  

Ya había trabajado con esta interfaz en la versión pasada, solo que le faltaban validaciones y estaba sujeta a mejoras (muchas a mi parecer).

  
  

#### <ins> Validaciones: </ins>

  

- Ahora, al ingresar la cadena de ADN solamente admitirá valores validos (A, T, C, G).

- Se agrego validacion del tamaño de la matriz (tanto en el numero de elementos por fila y el numero de columnas).

- Incui una validacion para que se puedan copiar y pegar cadenas de ADN completas (como las que vienen de muestra en el formulario)

<br>

  

#### <ins> Optimizaciones: </ins>

  

- Se mejoro el rendimiento de la vista previa, anteriormente la actualización de la vista se ejecutaba completamente en "kewdown" lo que provocaba errores en visualización de la matriz, ahora ya se puede teclear de manera muy rápida y no se afectara la vista de la matriz

  

- El tamaño de las "filas" en la matriz ya no están delimitadas por el ingreso de la coma por el usuario, ahora de manera automática se pasa a la captura de datos después de completar el numero de elemento necesarios (6).

- Los valores enviado a revisión se actualizaran en el apartado de consultas de manera automática (si, solo fue llamar al método de actualizar en el submit, pero sea como sea es un cambio sujeto a documentación c; ) 
  

### *¡Nueva funcionalidad para la edición de ADN's!*

  

ahora, en lugar de tener que editar las cadenas A ENVIAR en el textarea, se puede dar clic sobre el valor a editar en la vista previa e ingresar el nuevo valor. ¡La cadena de ADN a enviar a revisión se actualizara junto con la edición en la matriz!

  

  

# ¿Ahora que sigue?

Todavía se puede mejorar este proyecto, así que seguiré trabajando en el cuando pueda para seguir aprendiendo y no perder la practica  (｡•̀ᴗ-)✧
Por supuesto que todavía están en pie las ideas antes mostradas y que no se implementaron en esta versión: 

<br>

 - **Crear el responsive design de la pagina web.**
	 - tengo planeado el uso de media-query en CSS para hacer la pagina accesible desde celulares. Me apoyare con el uso del prepocesador SASS puesto que ya tengo algo de experiencia usándolo.

<br>

- **Guardado de las cadenas de ADN en una BD**. 
	 - Espero pronto implementar mongoDB como base de datos guardar la información de este proyecto, lo mas seguro es que venga después de hacer los responsive designs
	 - 
<br>

- **Mejorar la interface  de resultados y mostrar en la matriz las mutaciones encontradas**. 
	 - sin duda no me he pasado mucho por el código de los resultados, planeo poder mostrar el numero de secuencias encontradas en los ADN´s (el algoritmo ya me los cuenta, seria solo poder enviarlos junto con el resultado) y algo muy importante como lo es poder identificar rápidamente las mutaciones en la vista de matriz. <br><br>He pensado algunas maneras de como poder hacer eso en mis tiempos libres, así que espero poder llevar a cabo mis ideas sin muchos contratiempos

  <br>
  
- **Corrección de bugs y cositas que me encuentre**. 
	 - Sobre esto no puedo decir algo en concreto, hay errores a veces me aparecen y los soluciono durante la marcha (como algunos detalles que tuve con el preview). 
 
 <br>
 
Estas son las ideas que tengo en mente de momento y esto ha sido todo para esta actualización. **A momento de publicada esta me encuentro en busca de trabajo como desarrollador  y estoy abierto para poder tener alguna entrevista de trabajo. Realmente deseo poder desempeñarme como programador y comenzar mi vida laboral, dispuesto a aportar mis conocimientos y claro que también aprender mucho mas**
  

  

Gracias por leer hasta aquí y recuerda que eres libre de dejar tu feedback (8. que tenga excelente día, tarde o noche.