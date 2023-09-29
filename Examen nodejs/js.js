const http = require('http');
const fs = require('fs');


// no entendi exactamente como hacer que el node reciba el texto desde el html.

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL('http://localhost:8888' + pedido.url)
  let camino = 'public' + url.pathname
  if (camino == 'public/')
    camino = 'public/index.html'
  encaminar(pedido, respuesta, camino)
})

servidor.listen(8888)

console.log('Servidor creado');

//(Función para cambiar idioma del texto) De alguna manera tengo que hacer que la función reciba 
//el texto del formulario y muestre en pantalla el resultado de la traducción.

function IdiomaP(texto) {
  const vocales = 'aeiouAEIOU';
  let textoTraducido = '';
  
  for (let i = 0; i < frase.length; i++) {
    const letra = frase[i];
    
    if (vocales.includes(letra)) {
      textoTraducido += letra + 'p' + letra.toLowerCase();
    } else {
      textoTraducido += letra;
    }
  }
  
  return textoTraducido;
}
