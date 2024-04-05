const MAX_LENGTH = 16;
let numeroActual = "";

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
const botonSuma = document.getElementById("suma")
const numerosPantalla = document.getElementById("numerosPantalla");

boton1.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "1";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

    boton2.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "2";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

    boton3.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "3";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

    boton4.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "4";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

  boton5.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "5";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

  boton6.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "6";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

  boton7.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "7";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

  boton8.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "8";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

  boton9.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "9";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

  boton0.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += "0";
        numerosPantalla.innerHTML = numeroActual;
    }
  });

  botonPunto.addEventListener("click", () => {
    if ( numeroActual.length < MAX_LENGTH){
        numeroActual += ".";
        numerosPantalla.innerHTML = numeroActual;
    }
  });