var numeroBinario1 = prompt("Ingrese el primer número binario:");
var numeroBinario2 = prompt("Ingrese el segundo número binario:");

var hamming = 0;

  for (var i = 0; i < numeroBinario1.length; i++) {
    if (numeroBinario1[i] !== numeroBinario2[i]) {
      hamming++;
    }
  }

  document.write(numeroBinario1 + "<br>" + numeroBinario2 + " <br> " + hamming);

