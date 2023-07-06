/* 
Si no me equivoco son números primos y la suma de sus dígitos también es un número primo. Para 
este ejercicio estoy imprimiendo de un rango A a un rango B todos los numeros que cuenten con 
esa caracteristica
*/

function EsPrimo(numero) {
    var esPrimo = 1;
    
    for (var i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        esPrimo = 0 ;
        break ;
      }
    }
    
    return esPrimo === 1 ;
  }
  
  function calcularSumaDigitos(numero) {
    var suma = 0 ;
  
    while (numero > 0) {
      suma += numero % 10 ;
      numero = Math.floor(numero / 10) ;
    }
  
    return suma;
  }
  
  var rangoMin = parseInt(prompt("Ingresar rango A")) ;
  var rangoMax = parseInt(prompt("Ingresar tango B")) ;
  
  var numerosEspeciales = [] ;
  
  for (var i = rangoMin; i <= rangoMax; i++) {
    var sumaDigitos = calcularSumaDigitos(i) ;
  
    if (EsPrimo(i) && EsPrimo(sumaDigitos)) {
      numerosEspeciales.push(i) ;
    }
  }
  
  document.write(numerosEspeciales.join(" ")) ;
