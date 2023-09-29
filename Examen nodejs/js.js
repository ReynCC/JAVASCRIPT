const http = require('http');
const fs = require('fs');

const servidor = http.createServer((pedido, respuesta) => {
  const url = pedido.url;
  
  if (url === '/' || url === '/index.html') {

    respuesta.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('index.html').pipe(respuesta);
  } else if (url === '/traducir' && pedido.method === 'POST') {
  
    let datos = '';
    
    pedido.on('data', (chunk) => {
      datos += chunk;
    });
    
    pedido.on('end', () => {

      const fraseEnEspañol = decodeURIComponent(datos.split('=')[1]);

      const fraseTraducida = traducirAlIdiomaP(fraseEnEspañol);

      respuesta.writeHead(200, { 'Content-Type': 'text/html' });
      respuesta.end(`${fraseTraducida}</p>`);
    });
  } else {

  }
});

servidor.listen(8888, () => {
  console.log('Servidor web iniciado en http://localhost:8888');
});

function traducirAlIdiomaP(frase) {
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
