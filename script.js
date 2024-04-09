const MAX_LENGTH = 16;
let numeroActual = "";
let primerValor;
let contador = 0;

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("boton9");
const boton0 = document.getElementById("boton0");
const botonPunto = document.getElementById("botonPunto"); 
const numerosPantalla = document.getElementById("numerosPantalla");
const numerosPantallaDos = document.getElementById("numerosPantallaDos");
const botonSuma = document.getElementById("suma");

function suma(primerValor, segundoValor){
  return Number(primerValor) + Number(segundoValor)
}

botonSuma.addEventListener("click", function(){
  function agreSuma(){
    primerValor = Number(numeroActual);
    numerosPantallaDos.innerHTML += " + ";
  }
  
  if(contador === 0){
    agreSuma()
    numeroActual = ""
    numerosPantalla.innerHTML = numeroActual;

  } else if (contador === 1) {
    segundoValor = Number(numeroActual)
    resuSuma  = suma(primerValor, segundoValor)
    numerosPantalla.innerHTML = resuSuma;
  }

  contador++
}
)

boton1.addEventListener("click", function() {
  if(contador === 0){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "1";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }} else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "1";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton2.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "2";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "2";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton3.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "3";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "3";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton4.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "4";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "4";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton5.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "5";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "5";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton6.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "6";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "6";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton7.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "7";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "7";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton8.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "8";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "8";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton9.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "9";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "9";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

boton0.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "0";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += "0";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

botonPunto.addEventListener("click", function() {
  if (contador === 0) {
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += ".";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
      primerValor = numerosPantallaDos
  }
  }else if (contador === 1){
    if ( numeroActual.length < MAX_LENGTH){
      numeroActual += ".";
      numerosPantalla.innerHTML = numeroActual;
      numerosPantallaDos.innerHTML = numeroActual;
    }
  }
  
});

console.log(numerosPantalla, numerosPantallaDos, primerValor)