function EsPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (var i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  var rangoMin = parseInt(prompt("Ingrese el número mínimo del rango:"));
  var rangoMax = parseInt(prompt("Ingrese el número máximo del rango:"));
  
  var numerosEspeciales = [];
  
  for (var i = rangoMin; i <= rangoMax; i++) {
    var sumaDigitos = calcularSumaDigitos(i);
    
    if (EsPrimo(i) && EsPrimo(sumaDigitos)) {
      numerosEspeciales.push(i);
    }
  }
  
  document.write(numerosEspeciales.join(" "));
  
  function calcularSumaDigitos(numero) {
    var suma = 0;
  
    while (numero > 0) {
      suma += numero % 10;
      numero = Math.floor(numero / 10);
    }
  
    return suma;
  }