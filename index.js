const nomeEmpresa = "Omma";
console.log(nomeEmpresa);

let listaReceitas = [
  {
    id: 1,
    titulo: "bolo de cenoura",
    dificuldade: "facil",
    ingrediente: ["cenoura", "ovos", "leite", "bla", "bla"],
    preparo:
      "o preparo de um bolo de cenoura é muito simples, consiste em dskkdskdskdksdkskdskdksadiwjiqdqwddwwdjwjdj9w9jdw9jd9jwdj9wj9d",
    link: "youtube.com/melhorbolodecenoura",
    vegano: false,
  },
];

function cadastrarReceita(id, titulo, dificuldade, ingrediente, link, vegano) {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingrediente,
    link,
    vegano,
  };
  listaReceitas.push(novaReceita);
  console.log(`sua receita ${novaReceita.titulo} foi cadastrada com sucesso`);
}
cadastrarReceita(
  2,
  "pao de alho",
  "facil",
  ["lindo", "kubdidws", "kskdksdk"],
  "youtube.com/",
  true
);
function exibirReceitas() {
  for (let i = 0; i < listaReceitas.length; i++) {
    const receita = listaReceitas[i];
    console.log(`titulo: ${receita.titulo}
    ingrediente: ${receita.ingrediente}
    é vegana: ${receita.vegano}

    `);
  }
}
exibirReceitas();

function deletarReceitas(id) {
  for (let i = 0; i < listaReceitas.length; i++) {
    if (listaReceitas[i].id === id) {
      listaReceitas.splice(i, 1);
      console.log("lista removida com sucesso");
      console.log(listaReceitas);
    } else {
      console.log("lista não encontrada");
    }
  }
}
deletarReceitas(1);
