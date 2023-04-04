function calculoDeIMC() {
  const form = document.querySelector('.form')
  const mostrarResultadoIMC = document.querySelector('.resultadoIMC');
  let resultado = '';


  function calcularValores(e) {
    e.preventDefault();
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);

    const calculoIMC = peso / (altura ** 2)
    
    if(calculoIMC < 18.5) {
      resultado = 'Abaixo do peso';
    } else if( calculoIMC > 18.5 && calculoIMC <= 24.9) {
      resultado = 'calculoIMC';
    } else if(calculoIMC > 24.9 && calculoIMC < 29.9) {
      resultado = 'Sobrepeso';
    } else if(calculoIMC > 30 && calculoIMC < 34.9) {
      resultado = 'Obesidade grau 1';
    } else if(calculoIMC > 35 && calculoIMC < 39.9) {
      resultado = 'Obesidade grau 2';
    } else {
      resultado = 'Obesidade grau 3';
    } 

    mostrarResultadoIMC.innerHTML = `O resultado é ${calculoIMC.toFixed(2)} <strong>(${resultado})</strong>`
    document.querySelector('#altura').value = '';
    document.querySelector('#peso').value = '';
    document.querySelector('.resultadoIMC').style.display = 'flex';
    
  }


  form.addEventListener('submit', calcularValores)

}

calculoDeIMC();