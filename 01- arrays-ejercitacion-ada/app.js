// Estructuras de datos: Arrays
// Ejercicios
// Todo ejercicio que incluya emojis puede ser sustituido con strings

// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:
// obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2

// let numeros = [19, 27, 24, 8, 9, 15, 12]

// let obtenerMenor =(numeros)=>{

//     let min = numeros[0];

//     for (i=0; i< numeros.length; i++){
//         let valorActual = numeros[i];

//         if(valorActual < min){
//             min = valorActual

//             console.log(min)
//         }
//    }
    
// }

// obtenerMenor(numeros)


// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

// sumarNumeros([5, 7, 10, 12, 24]) // 58

// let numeros = [5, 7, 10, 12, 24];

// let contador = 0;

// let sumarNumeros = (numeros)=>{
//     for (let i = 0; i < numeros.length; i++) {
//         const valorActual = numeros[i];
//         contador += valorActual;
        
        
//     }
//     console.log(contador)
// }

// sumarNumeros(numeros);



// contiene(numero, numeros)
// Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

// let numero= 54;
// let numeros = [5, 7, 99, 3, 4, 54, 2, 12];

// let contiene = (numero, numeros)=> {
//     let existe = false;
   
//     for(let i=0; i<numeros.length ; i++){
//         if (numeros[i] === numero){
//             existe = true;
//         }
// }

// return existe;

// }

// console.log(contiene(numero, numeros));


// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'

// let string = 'Ada Lovelace';

// let invertirCaso = (string) => {

//     let nuevoString = '';
  
//     for (let i = 0; i < string.length; i++) {
    
//     let letra = string[i];

//     if (letra === letra.toUpperCase()) {

//       nuevoString += letra.toLowerCase();

//    } else {

//        nuevoString += letra.toUpperCase();
//     }
//   }

//   return nuevoString
// };

// console.log(invertirCaso(string));



// gano(tragamonedas)
// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

// gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
// gano(['💫', '💫', '💫', '💫', '💫']) // true
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true

// let tragamonedas = ['💫', '💫', '💫', '💫', '💫', '⭐️'];

// let gano = (tragamonedas)=>{
//     let sonIguales = '';
//     let primerSimbolo = tragamonedas[0];
                    
//     for (let i = 0; i <= 4 ; i++) {
//     let simbolo = tragamonedas[i];

//     if(primerSimbolo === simbolo){
//         sonIguales = true;

//     } else{
//         sonIguales = false;
//     }

//     }
//     return sonIguales               
//     }   

//     console.log(gano(tragamonedas));



// estanJuntos(personajes)
// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

// estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
// estanJuntos(['Aragorn', 'Frodo', 'Sam']) //true
// estanJuntos(['Sam', 'Orco', 'Frodo']) //false

// let personajes = ['Aragorn', 'Frodo', 'Sam'];
// let sam = 'Sam';
// let frodo = 'Frodo';

// let estanJuntos = (personajes)=>{

//     for (let i = 0; i < personajes.length; i++) {

//         if (personajes[i] === frodo) {
//             return personajes[i + 1] === sam ||  personajes[i - 1] === sam;
//         }
//     }
// }
// console.log(estanJuntos(personajes))


// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'


//En solución reemplazo 🐶 por 'A' y 🐱 por 'B'.


// let perrosYGatos = 'ABABBAA';

// let a = 'A';
// let b = 'B';

// let separar = (perrosYGatos)=>{
//     let perros = '';

//     let gatos = '';

//    for (let i = 0; i < perrosYGatos.length; i++) {
//         const animal = perrosYGatos[i];
        
//         if (animal === a) {
//             perros += animal;


//         } else if (animal === b){
//             gatos += animal;
//         }
//     }

//     return perros.concat(gatos);
// }

// console.log(separar(perrosYGatos));

// obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
// Ejemplo:

// obtenerChatStatus(['Ada']) // 'Ada está conectada'
// obtenerChatStatus(['Ada', 'Grace']) // 'Ada y Grace están conectadas'
// obtenerChatStatus(['Ada', 'Grace', 'Marie']) // 'Ada, Grace y 1 persona(s) más están conectadas'

// let usuarias = ['Ada', 'Grace', 'Marie'];

// let obtenerChatStatus = (usuarias)=>{

//         if (usuarias.length === 1){

//             return `${usuarias[0]} está conectada`;

//         } else if (usuarias.length === 2){
//             return `${usuarias[0]} y ${usuarias[1]} están conectadas`;

//         } else if (usuarias.length > 2) {
//             return`${usuarias[0]}, ${usuarias[1]} y ${usuarias.length - 2} persona(s) más están conectadas`;
//         }
        

// }
// console.log(obtenerChatStatus(usuarias))


// germinar(plantines)
// Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

// germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
// germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
// germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'

// let plantines = 'ACBCDCACBCDC';
// let brote = 'C'

// let germinar = (plantines) =>{
//     let plantinesGerminados =[];
// for (let i = 0; i < plantines.length; i++) {
//     const plantin = plantines[i];
    
//     if(plantin === brote){
//         plantinesGerminados += plantines[i - 1];      
//     }
//     else{
//         plantinesGerminados += plantines[i];
//     }
//     }
//     return plantinesGerminados
// }
// console.log(germinar(plantines))

// comer(plantas)
// Crear una función comer que tome por parámetro un string plantas que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

// comer('🐰🥕🥬🥕🚫') // ''
// comer('🥕🥬🐰🥕🥕🥕🚫') // '🥕🥬'
// comer('🐰🥕🥬🥕🚫🥕') // '🥕'
// comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷') // '🌱🥕🌱🌷'
// multiplicar(multiplicador, numeros)
// Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
// multiplicar(10, [2, 5, 77]) // [20, 50, 770]
// filtrarPorLongitudMayorA(longitud, palabras)
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

// filtrarPorLongitudMayorA(4, [
//   'dia',
//   'remolacha',
//   'azul',
//   'sorpresa',
//   'te',
//   'verde',
// ]) // ['remolacha', 'sorpresa', 'verde']
// recortar(cantidadLetras, palabras)
// Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

// recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
// recortar(1, ['algoritmo', 'bug', 'compilador']) // ['a', 'b', 'c']
// sonIguales(a, b)
// Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

// sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) // true
// sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) // false
// sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) // false
// obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)
// Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

// const puntajesA = [3, 5, 2]
// const puntajesB = [4, 6, 2]

// // puntajesA[0] vs. puntajesB[0] -> Gana B
// // puntajesA[1] vs. puntajesB[1] -> Gana B
// // puntajesA[2] vs. puntajesB[2] -> Empate

// // Resultado final: Gana Jugadora B
// obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]) // Ada
// obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]) // Empate
// obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) // Grace
// jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)
// Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

// const jugadasA = ['piedra', 'piedra', 'tijera']
// const jugadasB = ['papel', 'tijera', 'tijera']

// // jugadasA[0] vs. jugadasB[0] -> Gana B
// // jugadasA[1] vs. jugadasB[1] -> Gana A
// // jugadasA[2] vs. jugadasB[2] -> Empate

// // Resultado final: Empate
// jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) // Grace
// jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) // Empate
// jugarPiedraPapelTijeras(
//   'Ada',
//   'Grace',
//   ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
//   ['papel', 'piedra', 'tijera', 'tijera', 'papel']
// ) // Ada
// Ejercicios con DOM
// Para los siguientes ejercicios, no es necesario darle estilos más allá de los básicos que requiera el ejercicio para visualizarse correctamente. Se pueden utilizar funciones realizadas en los ejercicios previos.

// 📝 Lista de tareas
// Crear un programa que muestre:

// un input de texto
// un botón que diga Agregar tarea
// una lista ul
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// 🔍 Buscador
// Crear un programa que muestre:

// un input de texto
// una lista ul
// El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

// Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca script y JavaScript es un string dentro del array, se debe mostrar.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

// TIP: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.

// 📈 Total de gastos
// Crear un programa que muestre:

// un input de números
// un botón que diga Agregar gasto/ganancia
// una lista ul
// un elemento p
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento p.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// El elemento p se actualiza con el total de la suma de los valores del array.