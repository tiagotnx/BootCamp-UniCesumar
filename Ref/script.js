function ref() {

const sobrenome = document.getElementById('sobrenome');
const nome = document.getElementById('nome');
const titulo = document.getElementById('titulo');
const edicao = document.getElementById('edicao');
const cidade = document.getElementById('cidade');
const editora = document.getElementById('editora');
const ano = document.getElementById('ano');
const p = document.getElementById('ref')

let valorSobrenome = sobrenome.value;
let valorNome = nome.value;
let valorTitulo = titulo.value;
let valorEdicao = edicao.value;
let valorCidade = cidade.value;
let valorEditora = editora.value;
let valorAno = ano.value;

    p.innerHTML = `${valorSobrenome.toUpperCase()}, ${valorNome.substr(0,1)}. <strong>${valorTitulo}</strong>. ${valorEdicao}. ed. ${valorCidade}: ${valorEditora}, ${valorAno}.`;
}