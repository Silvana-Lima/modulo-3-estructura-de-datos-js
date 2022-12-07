
// ✅Estamos diseñando un nuevo sistema para una facultad, y tenemos la información de las materias para cada estudiante en objetos donde cada propiedad es una materia que contiene un array con las notas de los resultados de los parciales. Por ejemplo:

// let materiasAda = {
//   matematica: [10, 6, 10, 8],
//   algoritmos: [10, 10, 9],
//   algebra: [7, 9]
// };

// let materiasGrace = {
//   matematica: [2, 9, 10, 7],
//   algoritmos: [7, 1, 9],
//   algebra: [2, 3]
// };
// Nos pidieron generar un informe que muestre las materias aprobadas (promedio de notas >= 4) y desaprobadas (promedio de notas < 4);
// para implementar este reporte, tenemos que definir una función que tome un objeto con las materias y sus notas, y nos retorne un objeto con dos propiedades: aprobadas y desaprobadas;
// cada propiedad es un array que contiene el nombre de las materias que aprobaron o desaprobaron respectivamente.

// let promedio = (array)=>{
//     let suma = 0;
//     for (const i of array) {
//         suma += i;

//     }
//     return suma/array.length;
// }

// let agruparMateriasPorEstado = (materias)=>{

//     let matAprobadas = [];
//     let matDesaprobadas =[];
    
//     for (let materia in materias){
//         if(promedio(materias[materia]) >= 4){
//             matAprobadas.push(materia);
//         } else{
//             matDesaprobadas.push(materia)
//         }
//     }
//     return {
//         aprobadas: matAprobadas,
//         desaprobadas: matDesaprobadas
//     };
//   }

//   console.log(agruparMateriasPorEstado(materiasGrace));

// Ejercicio 4: Render álbum
// Queremos crear un html a partir de un objeto de JavaScript, más especificamente vamos a crear una página que nos permita visualizar discos de Spotify . Los discos tienen las propiedades: id (string), nombre (string), anio (número), genero (array de strings), banda (string), portada (string) e info (string). Por ejemplo:

// let albumDeEjemplo = {
//   id: 'nirv1234',
//   nombre: 'With The Lights Out',
//   anio: 2004,
//   genero: 'Grunge',
//   banda: 'Nirvana',
//   portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
//   info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
// };
// Para eso definiremos una función render que reciba un disco como argumento y genere un HTML de la siguiente forma:

//  render(albumDeEjemplo)
// `
// <div class="card m-5" id="nirv1234">
//   <img class="card-img-top" src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg" alt="Nirvana - With The Lights Out" />
//   <div class="card-body">
//     <h5 class="card-title">Nirvana</h5>
//     <p class="card-text">With The Lights Out (2004) | Grunge</p>
//     <a href="https://en.wikipedia.org/wiki/With_the_Lights_Out" class="btn btn-primary">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>
//   </div>
// </div>
// `

// let render = (album)=>{
//     const {id, nombre, anio, genero, banda, portada, info}= album;
    
//     return `<div class="card m-5" id="${id}">
//     <img class="card-img-top" src="${portada}" alt="${banda} - ${nombre}" />
//     <div class="card-body">
//       <h5 class="card-title">${banda}</h5>
//       <p class="card-text">${nombre} (${anio}) | ${genero}</p>
//       <a href="${info}" class="btn btn-primary">${info}</a>
//     </div>
//   </div>
//   `
    
//   }
//   console.log(render(albumDeEjemplo));

//✅ Necesitamos una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.

// let tamaño = { width: 2, length: 5, height: 1 };

// //  volumenCaja(tamaño)
// // 10
// // Definí la función volumenCaja que tome por parámetro un tamaño y calcule su volumen.

// let volumenCaja = (tamanio)=>{
//     const{width, length, height}= tamanio;
//     return width * length * height
//   }

//   console.log(volumenCaja(tamaño));

//✅ Ejercicio 6: Redondeo
// Necesitamos hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y un número redondeado que dependa de su punto flotante (Math.round).

//  redondear(13.3)
// { floor: 13, ceil: 14, round: 13 }

// let redondear = (numero)=>{

//     return {
//       floor: Math.floor(numero),
//       ceil: Math.ceil(numero),
//       round: Math.round(numero),
//     }

//   }

// console.log(redondear(13.3));

//✅ Ejercicio 7: Comprar productos
// Necesitamos definir una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino.

// let productos = { cookies: 40, chocolate: 45, soda: 30 };
// let dinero = 40;

//  comprarProductos(dinero, productos)
// { cookies: true, chocolate: true, soda: false }
// Definí la función comprarProductos y las funciones auxiliares necesarias para lograr el comportamiento que acabamos de describir.

//  ¡Dame una pista!
// Tal vez sea útil recorrer cada producto para clonarlo en un objeto junto con el valor booleano que defina si el mismo es de menor precio que el dinero disponible.


//  let comprarProductos = (dinero, productos)=>{
//     let nuevoObjeto = {...productos}
    
//     for (let key in nuevoObjeto){

//       if(nuevoObjeto[key]> dinero){
//         nuevoObjeto[key] = false;
//       } else{
//         nuevoObjeto[key] = true;
//       }
  
//   }
//   return nuevoObjeto;
//   }

//   console.log(comprarProductos(dinero,productos));

//Otra solucion para mumuki

// let comprarProductos = (dinero, productos)=>{
//     let nuevoObjeto = {};
    
//     for (let key in productos){
//       if(productos[key]<= dinero){
 
//       nuevoObjeto[key] = true;
//       } else{
//         nuevoObjeto[key] = false;
//       }
    
//   }
//   return nuevoObjeto
//   }

//   console.log(comprarProductos(dinero,productos));



// Ejercicio 11: Analizando párrafos
// Necesitamos una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.

//  obtenerInfoDelParrafo("Do. Or do not. There is no try.");
// { letras:  21, palabras: 8, oraciones: 3 }
// Definí la función obtenerInfoDelParrafo.

// ❌let obtenerInfoDelParrafo = (parrafo)=>{

//     let nroLetras = 0;
//     let nroPalabras = parrafo.split(' ').length;
//     let nroOraciones = parrafo.split('.').length -1;
//     let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     let nuevoString = parrafo.toLowerCase();

//     for (let i = 0; i< nuevoString.length; i++){
//         let caracter = nuevoString[i];
//     for (let j = 0; j< abecedario.length; j++) {
//         if(caracter === abecedario[j]){
//             nroLetras += 1;
//           }
//     }
//     }

//     return { letras:  nroLetras, 
//              palabras: nroPalabras, 
//              oraciones: nroOraciones }
// }

// console.log(obtenerInfoDelParrafo("Do. Or do not. There is no try."));

// Ejercicio 12: Parámetros de búsqueda
// Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y se escriben como parametro=valor, separados por el signo &.

//  parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=objects&lenguaje=javascript&nivel=intermediate");
// { palabraClave: "objetos", lenguaje: "javascript", nivel: "intermedio" }
// Definí la función parsearParametrosDeBusqueda que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.

// let parsearParametrosDeBusqueda = (url)=>{

//     let igual = "=";
//     let ampersand = "&";
//     let palabraClave = "";
//     let lenguaje = "";
//     let nivel= "";
//     let nose = "";

//     let posicionIgual = url.indexOf(igual);
//     let posicionAmpersand = url.indexOf(ampersand);


//     for (let i = 0; i < url.length; i++) {
//         const element = url[i];
//         nose += url.slice(posicionIgual + 1, posicionAmpersand);

        
//     }

//     return { palabraClave: nose, lenguaje: nose, nivel: nose };
//   }

//   console.log(parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=objects&lenguaje=javascript&nivel=intermediate"));

// Ejercicio 13: Batalla
// Necesitamos una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: daño = ataque del atacante - defensa del atacado y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos.

//  let combatienteA = { nombre: "Chun-Li", vida: 100, ataque: 40, defensa: 10 };
//  let combatienteB = { nombre: "Cammy", vida: 50, ataque: 20, defensa: 20 };

// //  pelea(combatienteA, combatienteB);
// // { rondas: 3, gano: "Chun-Li"}
// // Definí la función pelea que retorne un objeto que indique la cantidad de rondas y quién ganó.

// let pelea = (combatienteA, combatienteB)=>{
//     let rondas = 0;
//     let gano = "";
//     let dañoA = 0;
//     let dañoB = 0;

//     for (let i = 0; i < combatienteA.length ; i++) {

//             if (combatienteA.vida > 0) {
//                 dañoA = combatienteB.ataque - combatienteA.defensa;
//               //  console.log(dañoA);
//                 combatienteA.vida -= dañoA
//                // console.log(combatienteA.vida);
//             } else if(combatienteB.vida > 0) {
//                 dañoB = combatienteA.ataque - combatienteB.defensa;
//             //    console.log(dañoB);
//                 combatienteB.vida -= dañoB
//              //   console.log(combatienteB.vida);
//             } 
//             rondas ++;
//             if (combatienteA.vida > combatienteB.vida) {
//                 gano = combatienteA.nombre;    } else {
//                     gano = combatienteB.nombre;
//             }
//     }



//     return{
//         rondas,
//         gano
//     }
//   }

//   console.log(pelea(combatienteA, combatienteB));

//✅ Ejercicio 14: Búsqueda laboral
// Necesitamos una función que dada una persona y una búsqueda de empleo, devuelva si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:

// let persona = {
//   experiencia: 4,
//   lenguajes: ["JavaScript", "HTML","CSS"],
//   locacion: "Buenos Aires",
//   remuneracion: 35000
// }

// let busqueda = {
//   experiencia: 1,
//   lenguajes: ["JavaScript", "HTML"],
//   locacion: ["Buenos Aires"],
//   remuneracion: 40000
// }
// La persona se adecua si:

// cuenta con los años de experiencia necesarios para la búsqueda;
// los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada);
// su locación está incluida dentro de las locaciones posibles de la búsqueda;
// su remuneración (pretendida) es igual o menor a la de la búsqueda.
//  seAdecua(persona, busqueda)
// true
// Definí la función seAdecua para lograr el comportamiento que acabamos de describir.

// let seAdecua = (persona, busqueda) =>{
//     let lenguajes = false;
//     let locacion = false;

// for (let i = 0; i < busqueda.lenguajes.length; i++) {
//     const element = busqueda.lenguajes[i];
//     if (persona.lenguajes.includes(element)) {
//         lenguajes = true;
//     }
//     if (persona.locacion.includes(busqueda.locacion[i])){
//         locacion = true;
//     }
// }

// return persona.experiencia >= busqueda.experiencia && persona.remuneracion <= busqueda.remuneracion && lenguajes && locacion;

// }

// console.log(seAdecua(persona, busqueda));

