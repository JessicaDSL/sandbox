function meuEscopo() {
  const form = document.querySelector('.form');
  const listaDePessoas = document.querySelector('.resultado');
  let pessoas = [];

  function recebeEventoForm(e) {
    e.preventDefault();
    const nome = form.querySelector('.nome').value;
    const sobrenome = form.querySelector('.sobrenome').value;
    const peso = form.querySelector('.peso').value;
    const altura = form.querySelector('.altura').value;
    pessoas.push({nome, sobrenome, peso, altura})
    listaDePessoas.innerHTML = `<ul>${pessoas.map(pessoa => `<li><p>Nome: ${pessoa.nome}</p> <p>Sobrenome: ${pessoa.sobrenome}</p></li> <p>Peso: ${pessoa.peso}kg</p></li> <p>Altura: ${pessoa.altura}m</p></li>`).join('')}</ul>`
  }

  form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();