var Palabra = document.getElementById('Palabra');
var Descubre = document.getElementById('Descubre');
var Visual = document.getElementById('Visual');
var Mensaje2 = document.getElementById("Mensaje");
var Vidas2 = document.getElementById('Vidas');
var Ahorcado2 = document.getElementById('Ahorcado');
var ListaPalabras=[];
ListaPalabras.push('AUTO');
ListaPalabras.push('CAMION');
ListaPalabras.push('BICICLETA');
ListaPalabras.push('MOTOCICLETA');
ListaPalabras.push('CANOA');
ListaPalabras.push('CABALLO');
ListaPalabras.push('AVION');
ListaPalabras.push('BARCO');
ListaPalabras.push('PATINETA');
ListaPalabras.push('PATINES');
ListaPalabras.push('CARRUAJE');
ListaPalabras.push('AVIONETA');
function BuscarPalabra(){ 
var Aleatorio = Math.round(Math.random()*10); 
var Esconde = ''; 
var Paso = '';
var Mostrar = '';
  Palabra.innerHTML = ListaPalabras[Aleatorio];   
  Esconde = ListaPalabras[Aleatorio]; 
  for (i=0; i < Esconde.length; i++){
	  Paso = Paso + "_";
	  Mostrar = Mostrar + "_ ";
  } 
  Descubre.innerHTML = Paso;  
  Visual.innerHTML = Mostrar;
  Mensaje2.innerHTML = ''; 
  Vidas2.innerHTML = 1;
  Ahorcado2.src="Ahorcado1.jpg";
  return false;
}


