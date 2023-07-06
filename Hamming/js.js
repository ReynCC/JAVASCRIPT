var numeroBinario1 = prompt("ingresar numero binario");
var numeroBinario2 = prompt("Ingresar segundo numero");

var hamming = 0;

  for (var i = 0; i < numeroBinario1.length; i++) {
    if (numeroBinario1[i] !== numeroBinario2[i]) {
      hamming++;
    }
  }

  document.write(numeroBinario1 + "<br>" + numeroBinario2 + " <br> " + hamming);
