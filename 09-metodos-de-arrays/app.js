// ✅Ejercicio 1: Números más diez
// Usando map, definí una función numerosMasDiez que tome una lista de numeros y devuelva un nuevo array incrementando cada elemento original en 10

//  const numeros = [1, 2, 3, 4, 5];
// //  numerosMasDiez(numeros);
// // [11, 12, 13, 14, 15]

// const numerosMasDiez = (numeros) =>{
// return numeros.map((numero)=> numero + 10)


// }

// console.log(numerosMasDiez(numeros));

//✅Ejercicio 2: Dobles
// Usando map definí la función dobles que tome una lista de numeros y devuelva un nuevo array con cada valor multiplicado por dos

//  const numeros = [3, 7, 13, 99];
//  dobles(numeros)
// [6, 14, 26, 198]

// const dobles = (numeros) =>{

//     return numeros.map((numero)=> numero * 2)

// }

// console.log(dobles(numeros));

//✅ Ejercicio 3: Gritar todas
// Usando map definí la función gritarTodas que tome una lista de frasescon frases al azar y devuelva un nuevo array en donde cada frase empiece y termine con un signo de exclamación.

//  const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// //  gritarTodas(frases)
// // ['¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!']

// let gritarTodas = (frases) =>  frases.map((frase)=>`¡${frase}!`)



// console.log(gritarTodas(frases));

// ✅Ejercicio 4: Enlistar
// Usando map definí la función enlistar que tome una lista de libros con libros para leer y devuelva un nuevo array en donde cada título de los libros esté dentro de una etiqueta <li></li>.

//  const librosJS = ['JavaScript for Kids: A Playful Introduction to Programming','Composing Software','Eloquent JavaScript: A Modern Introduction to Programming','JavaScript: The Good Parts','Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries','Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript','JavaScript: The Definitive Guide','You Don’t Know JS','JavaScript Allongé: The Six Edition'];
// //  enlistar(librosJS)

// const enlistar =(libros)=> libros.map((libro)=> `<li>${libro}</li>`)


// console.log(enlistar(librosJS));

// ✅Ejercicio 5: Longitudes
// Usando map, definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// //  longitudes(frases)
// // [ 17, 18, 16 ]

// const longitudes = (frases)=> frases.map((frase)=> frase.length)


// console.log(longitudes(frases));

//✅ Ejercicio 6: Posiciones
// Usando map, definí la función posiciones que tome una lista de canciones de una playlist y devuelva un nuevo array con los números de las posiciones de cada canción.

// const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];
// //  posiciones(playlist)
// //  [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]

// const posiciones =(playlist)=> playlist.map((song, indice)=> `${indice} - ${song}`);

// console.log(posiciones(playlist));

// ✅Ejercicio 7: Precios finales
// Necesitamos calcular los precios finales de unos productos . Para ello tenemos que:

// aplicarle la ganancia sobre su costo;
// aplicarle el IVA sobre el resultado anterior.
// Usando map, definí la función preciosFinales que tome una lista de costos de diferentes productos y devuelva un nuevo array con el precio final de cada uno.

//  const costos = [ 12.5, 56, 98, 45.75 ];
// //  preciosFinales(costos)
// // [22.6875, 101.64, 177.87, 83.03625]

function agregarIVA(costo) {
    return costo * 1.21;
  }

  //console.log(agregarIVA(12.5));

  
  function sumarGanancia(costo) {
    return costo * 1.5;
  }

  let preciosFinales = (costos)=> costos.map((costo)=> sumarGanancia(agregarIVA(costo)))
  

//   console.log(preciosFinales(costos));


// ✅Ejercicio 9: Los más caros
// Usando filter, definí la función losMasCaros que tome una lista de costos que representan costos de diferentes productos y devuelva un nuevo array con los precios más caros (mayores a 50)

//  const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// //  losMasCaros(costos)
// //  [53, 99, 68, 54, 97, 90, 92, 75, 86]

// const losMasCaros = (costos)=> costos.filter((costo)=> costo > 50)


// console.log(losMasCaros(costos));

// ✅Ejercicio 10: Pares e impares
// Usando filter, definí la función separandoPares que tome una lista de numeros con números al azar y devuelva un nuevo array con los números pares. Y otra función separandoImpares que también tome una lista de números y devuelva un nuevo array con los números impares.

//  const numeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
// //  separandoPares(numeros)
// // [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// //  separandoImpares(numeros)
// // [43, 11, 37, 29, 9, 3, 37, 25]

// let separandoPares =(numeros)=> numeros.filter((numero)=> numero % 2 === 0);

// console.log(separandoPares(numeros));

// let separandoImpares = (numeros) => numeros.filter((numero)=> numero % 2 !== 0);

// console.log(separandoImpares(numeros));

//✅ Ejercicio 11: Sólo strings
// Usando filter, definí la función soloStrings que tome una lista de mix con varios elementos de distintos tipos de datos y devuelva un nuevo array que contenga sólo los datos de tipo string.

//  const mix = [ 'Ut vero.',2 , function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true, false,'Kasd stet.', 'Sit et dolor.', null, null, [ 1, 2, 3], 'Dolore.'];

// //  soloStrings(mix)
// // ['Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

// let soloStrings =(mix)=> mix.filter((elemento)=> typeof(elemento) === "string");

// console.log(soloStrings(mix));

