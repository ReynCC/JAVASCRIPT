var cantidadNumeros = prompt("Ingresar cantidad de numeros") ;
cantidadNumeros = parseInt(cantidadNumeros) ;
var numeros = [] ;

for (var i = 0; i < cantidadNumeros; i++) {

  var numeroAleatorio = Math.floor(Math.random() * 100) + 1 ;
  numeros.push(numeroAleatorio) ;
  document.write(numeroAleatorio + " ") ;

}
numeros.sort(function(a, b) {

  return a - b ;

}) ;
var mediana ;
if (numeros.length % 2 === 0) {

  var medio = numeros.length / 2 ;

  mediana = (numeros[medio - 1] + numeros[medio]) / 2 ;

} else {

  var medio = Math.floor(numeros.length / 2) ;

  mediana = numeros[medio] ;

}

document.write("mediana: " + mediana) ;
