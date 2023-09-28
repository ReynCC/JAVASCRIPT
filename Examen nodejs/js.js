const http = require('http');
const fs = require('fs');


// no entendi exactamente como hacer que el node reciba el texto desde el html.

servidor.listen(8888, () => {
  console.log('Servidor web iniciado');
});

function IdiomaP(frase) {
  const vocales = 'aeiouAEIOU';
  let fraseTraducida = '';
  
  for (let i = 0; i < frase.length; i++) {
    const letra = frase[i];
    
    if (vocales.includes(letra)) {
      fraseTraducida += letra + 'p' + letra.toLowerCase();
    } else {
      fraseTraducida += letra;
    }
  }
  
  return fraseTraducida;
}