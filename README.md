# **WorkAngular**
Trabajo 2 de electivo Angular, Ignacio Baeza, Ismael Miranda

**Objetivo**
Implementar una aplicación web usando el framework Angular. 

**Enunciado**

Conecta 4 o “4 en línea” es un juego de reflexión que se dio a 
conocer en 1974. El Conecta 4 se hizo popular muy rápido ya que 
las reglas del juego son muy sencillas, sin embargo, la estrategia 
para ganar requiere experiencia por parte de los jugadores.
El Conecta 4 se juega de a dos jugadores sobre un tablero de 7
columnas por 6 filas (Figura 1). Cada jugador dispone de 21 fichas 
de un color. Por turnos, los jugadores deben introducir una ficha en 
la columna que prefieran (siempre que no esté completa) y ésta 
caerá a la posición más baja. Gana la partida el primero que 
consiga alinear cuatro fichas consecutivas de un mismo color en 
horizontal, vertical o diagonal. Si todas las columnas están llenas, 
pero nadie ha hecho una fila válida, hay empate.
Para esta tarea, usted debe implementar el juego del Conecta 4 usando el framework Angular. Su 
aplicación debe solicitar el nombre de 2 jugadores y luego por turnos solicitar la jugada. Se evaluará que 
su aplicación respete las restricciones que se indican más abajo.
Figura 2: Interfaz de la aplicación
Figura 1
JUEGO CONECTA 4
Estudiantes: Olga Ortiz / Juan Pérez – Desarrollo Frontend con Angular (2022)
Mensajes
Jugador/a 1:
Nuevo juego
Jugador/a 2:
1 2 3 4 5 6 7
Olga
Juan
Juan ganaste esta partida!
Comenzar
Restricciones:
• El jugador que inicia se obtiene aleatoriamente.
• Genere el proyecto desde cero (no utilice variables y estructuras del ejemplo de clases).
• Diseñe una interfaz que respete el layout solicitado (ver Figura 2).
• El botón comenzar inicia el juego solicitando que uno de los jugadores haga su jugada.
• El botón Nuevo Juego limpia reinicia todas las estructuras y datos en pantalla.
• Muestre todos los mensajes en la sección Mensajes, por ejemplo, indicar de quién es el turno o 
quién es el ganador.
• Una jugada se lleva a cabo haciendo clic sobre algún botón que está sobre cada columna.
• Cuando exista un ganador, las fichas que provocan esta situación deben mostrar un borde más 
grueso y de color amarillo.
• Al ganar el jugador debe mostrar el mensaje “Juan ganaste esta partida!”, si su nombre era Juan.
El color del texto debe ser el mismo de su ficha.
• Debe utilizar un arreglo para almacenar el estado del tablero.
• Debe utilizar al menos 2 directivas personalizadas.
• Debe utilizar directivas estructurales (*ngIf, *ngFor).
• Debe utilizar binding para los eventos del mouse.
• Utilice sólo código y estructuras vistas en clases no use elementos avanzados de Angular que no 
ha sido vistos.
Consideraciones de la tarea:
• Puede revisar el siguiente video explicativo 
 https://www.youtube.com/watch?v=JBSbiilzg9U
• Este trabajo lo pueden desarrollar 2 integrantes máximo.
• Fecha de entrega: miércoles 11/05/2022.
• Entrega del proyecto angular sin la carpeta node_modules en plataforma Moodle.
• Debe asegurarse que su proyecto se puede reconstruir sin problemas.
• Las copias tienen nota 1 para ambas partes. No preste su tarea
