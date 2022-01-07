function tipoAutores() {
  const form = document.querySelector("#form");

  const divBotao = document.querySelector("#botao");

  const divReferencia = document.querySelector("#referencia");

  const tipo = document.querySelector("#tipo");
  const optionTipo = tipo.options[tipo.selectedIndex].value;

  const autores = document.querySelector("#autores");
  const optionAutores = autores.options[autores.selectedIndex].value;

  const botao = document.createElement("button");

  if (optionTipo == "livro" && optionAutores == "1autor") {
    console.log("funfou");

    form.innerHTML = "";
    divBotao.innerHTML = "";

    const campos = [
      { campo: "Sobrenome" },
      { campo: "Nome" },
      { campo: "Título" },
      { campo: "Edição" },
      { campo: "Cidade" },
      { campo: "Editora" },
      { campo: "Ano" },
    ];

    for (let itens of campos) {
      let labels = document.createElement("label");
      let inputs = document.createElement("input");
      for (let prod in itens) {
        if (prod == "campo") {
          form.appendChild(labels).innerText = itens[prod];
          labels.appendChild(inputs).setAttribute("id", itens[prod]);
        } else {
          form.appendChild(labels).setAttribute("id", itens[prod]);
          labels.appendChild(inputs).setAttribute("id", itens[prod]);
        }
      }
    }

    divBotao.appendChild(botao).innerText = "Formatar";

    botao.addEventListener("click", gerar);

    function gerar() {
      const sobrenome = document.querySelector("#Sobrenome").value;
      const pronomes = document.querySelector("#Nome").value;
      const titulo = document.querySelector("#Título").value;
      const edicao = document.querySelector("#Edição").value;
      const cidade = document.querySelector("#Cidade").value;
      const editora = document.querySelector("#Editora").value;
      const ano = document.querySelector("#Ano").value;

      divReferencia.innerHTML += `<p>${sobrenome.toUpperCase()}, ${pronomes.substr(
        0,
        1
      )}. ${titulo.bold()}. ${edicao}. ed. ${cidade}: ${editora}, ${ano}.</p>`;
    }
  }
}

autores.addEventListener("blur", tipoAutores);
