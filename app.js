let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);//recibe por parametro el selector que vamos a poseer.
    elementoHTML.innerHTML = texto;//un titulo en pantalla  
    return;
}

function verificarIntento(){//este es un evento
  // let numeroDeUsuario = document.querySelector('input');//input es una etiqueta que esta representando una caja de texto en el html
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //especifica para buscar por id

  if(numeroDeUsuario === numeroSecreto){//igual en valor y en tipo de dato
asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces' } `);
document.getElementById('reiniciar').removeAttribute('disabled');
  }else{

    if(numeroDeUsuario > numeroSecreto){
    asignarTextoElemento('p','El numero secreto es menor');
  }else{

    asignarTextoElemento('p','El numero secreto es mayor');
  }
  intentos++;
  limpiarCaja();
}
return;

}

function limpiarCaja(){
let valorCaja = document.querySelector('#valorUsuario')//con el # le indico al queryselector que lo que estoy buscando es un id
valorCaja.value='';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;//floor retorna solo la parte decimal 

console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros 
if (listaNumerosSorteados.length == numeroMaximo) {
  //Buscamos un numero que aún no haya sido sorteado
   asignarTextoElemento('p','Ya se sortearon todos los números posibles');
}else{
    //Si el numero genrado esta incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {//Includees revisa todo el arreglo buscando si algo ya existe, recibe como parametro el valor a checar
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
     return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
//invoca a las funciones
asignarTextoElemento('h1','Juego del numero secreto:)');
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos=1;
}

function reiniciarJuego() {
  //limpiar caja 
  limpiarCaja();
  //indicar mensaje de intervalo de inicio 
  //generar el numero aleatorio 
 //Inicializar el numero intentos
 condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();