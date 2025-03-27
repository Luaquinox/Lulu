const numero1 = document.getElementById('valor1');
const numero2 = document.getElementById('valor2');
const somar = document.getElementById('somar');
const subtrair = document.getElementById('subtrair');
const multiplicar = document.getElementById('multiplicacao');
const dividir = document.getElementById('divisao');
const resultado = document.getElementById('resultado');


function soma(){
     let valor1 = parseFloat(numero1.value);
     let valor2 = parseFloat(numero2.value);
     let valor = valor1 + valor2;
     mostraResultado(valor);
   
}

function subtrair(){
     let valor1 = parseFloat(numero1.value);
     let valor2 = parseFloat(numero2.value);
     let valor = valor1 - valor2;
     mostraResultado(valor);
     
}

function multiplicar(){
     let valor1 = parseFloat(numero1.value);
     let valor2 = parseFloat(numero2.value);
     let valor = valor1 * valor2;
     mostraResultado(valor);

} 

function dividir(){
     let valor1 = parseFloat(numero1.value);
     let valor2 = parseFloat(numero2.value);
     if (valor2 == 0){
     } else {
          let valor = valor1 / valor2;
          mostraResultado(valor); 
     }
     

} 

somar.addEventListener('click',soma);
subtrair.addEventListener('click',subtrair);
multiplicar.addEventListener('click',multiplicar);
dividir.addEventListener('click',dividir);