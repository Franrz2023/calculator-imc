
const indicator = document.getElementById('circle');
const resultPrint = document.getElementById('results');
const btnCalcular = document.getElementById('btnCalcular')
const graph = document.getElementById('contFixded')
let calculo = 0;
let alturaEnCm = 0;
let variable = 0
let valor = ''
let porcentaje = 0;
btnCalcular.addEventListener('click', function () {

  calculateIMC()

  if (calculo < 18.4) {
    valor = 'Bajo peso'
    results(valor, variable)

  } if (calculo >= 18.5 && calculo <= 24.9) {
    valor = 'Peso normal o saludable'
    variable = 100;
    results(valor, variable)
  } if (calculo > 25 && calculo <= 29.9) {
    variable = 200
    valor = 'Sobrepeso'
    results(valor, variable)
  } if (calculo > 29.9) {
    valor = 'Obesidad'
    variable = 300
    results(valor, variable)

  }

});

function calculateIMC() {
  let altura = document.getElementById('alturaCm').value;
  kg = document.getElementById('inputkg').value;
  if(altura >= 1 && kg >=  1 &&  altura <= 290 && kg <=  500){
    alturaEnCm = altura / 100;
    calculo = kg / (alturaEnCm * alturaEnCm)
    console.log('altura :', alturaEnCm, 'peso :', kg, 'total :',calculo)

  }else{
    alert('REVISE VALORES')
  }

}

function results(valor, variable) {
  graph.classList.remove('hidden')
  porcentaje = calculo + variable;
  graph.appendChild(resultPrint);
  resultPrint.innerText = `${valor}`;
  indicator.style.transform = `translatex(${porcentaje}px)`;
  console.log('porcentaje vale',porcentaje)  
  valor = '';

  if( porcentaje < 0){
    porcentaje = 0
    graph.appendChild(resultPrint);
 
    indicator.style.transform = `translatex(${porcentaje}px)`;
    console.log('porcentaje vale else',porcentaje)
    porcentaje = 0;
    valor = '';
  }if( porcentaje > 371 ){
    porcentaje = 371
    graph.appendChild(resultPrint);
    resultPrint.innerText = `Obesidad`;
    indicator.style.transform = `translatex(${porcentaje}px)`;
    console.log('porcentaje vale else',porcentaje)
    valor = '';
  }


}



