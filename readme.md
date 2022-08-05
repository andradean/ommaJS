projeto Gama Academy
Crie uma pasta com o nome que preferir ex:omma-js e dentro deixa crie um
arquivoindex.js. Será dentro desse arquivo que vocêdeverá cada
funcionalidade. Para executar, basta abrir o terminal dentro da pasta do projeto e
executar o comandonode index.js

Requisitos

1. Precisamos armazenar o nome da empresa, e sempre que for executado o
   sistema ( Execução do arquivoindex.js) deve exibirno console esse nome.
   Essa informação nunca deve ser alterada durante o uso do sistema.
2. Precisamos armazenar a lista de receitas em nosso sistema chamada
   receitas: Para isso iremos usar o recurso de Arraysdo Javascript. Essa lista
   deve ter acesso global para todas as funcionalidades do sistema.
3. Deixaremos previamente deixar cadastrada uma receita dentro da nossa
   lista de receitas, o cliente deixará livre a escolha de qual receita será. Além
   disso, uma receita será representada por umobjeto e deverá ter os
   seguintesatributos:
   a. Um identificador único que não pode se repetir no sistema
   b.titulo da receita
   c. nível dificuldade ( com a escala de simples, moderada e complexa)
   d. lista de ingredientes já com a medida (Ex: 1 colher de açúcar)
   e. instruções de preparo
   f. link do video de preparo
   g. se é vegana ou não
4. Será preciso criar uma função que permita cadastrar uma receita dentro
   da lista de receitas, seguindo os padrões do objeto estipulado na etapa
   anterior. A função deve se chamarcadastrarReceita e deverá receber
   cada informação da receita porparâmetro devolverumfeedback no
   console que o cadastro foi concluído.
   5.Devemos criar uma função chamadaexibirReceitas queirá listar no
   console, todas as receitas cadastradas. Porém ao exibir cada receita deve
   apenas os seguintes atributos devem ser mostrados:
   a.Titulo da Receita
   b.Lista de Ingredientes
   c.Se é vegana ou não
   6.Devemos criar uma função que nos permita deletar uma receita, e o nome
   serádeletarReceita ela irá receber como parâmetroo identificador da
   receita. Caso o identificador não seja encontrado deve exibir a seguinte
   mensagem:“Receita não encontrada”. Se a receita forencontrada deve
   ser deletada da lista e exibir uma mensagem de sucesso no console
