# Boas-vindas ao repositório do exercício books-list

<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste exercício você vai desenvolver funções usando as `Higher Order Functions` **map** e **sort**
  
<br />

</details>

# Orientações

<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Instale as dependências

- Para isso, use o seguinte comando: `npm install`

<details>
<summary><strong>🏗 Estrutura do exercício</strong></summary><br />

Você trabalhará com uma estrutura de dados representando uma lista de livros (está no arquivo `library.js` no diretório `data`), contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje.

</details>

---

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

## 1. Implemente a função `formatedBookNames`

<details>
  <summary>
  Implemente a função <code>formatedBookNames</code> que irá formatar as informações dos livros da nossa base de dados
  </summary> <br />

- A função `formatedBookNames` deverá ser implementada dentro do arquivo `formatedBookNames.js`

- A função `formatedBookNames` deverá retornar um array de strings no formato: `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`

⚠️ Importante: A estrutura de dados `books` já está importada na linha 1 no arquivo desse exercício.
Para usar, descomente a importação.
<br/>
Esse trecho está comentado para evitar um erro de lint, uma vez que a variável não está sendo utilizada ainda.

</details>

---

## 2. Implemente a função `formatedAuthorNamesBirth`

<details>
  <summary>
  Implemente a função <code>formatedAuthorNamesBirth</code> que irá formatar informações das pessoas autoras da nossa base de dados
  </summary> <br />

- A função `formatedAuthorNamesBirth` deverá ser implementada dentro do arquivo `formatedAuthorNamesBirth.js`

- A função `formatedAuthorNamesBirth` deverá retornar um array de strings no formato: `NOME_DA_PESSOA_AUTORA - ANO_DE_NASCIMENTO`

⚠️ Importante: A estrutura de dados `books` já está importada na linha 1 no arquivo desse exercício.
Para usar, descomente a importação.
<br/>
Esse trecho está comentado para evitar um erro de lint, uma vez que a variável não está sendo utilizada ainda.

</details>

---

## 3. Implemente a função `nameAndAge`

<details>
 <summary>
  Implemente a função <code>nameAndAge</code> que deve retornar um array de objetos, os objetos devem conter informações do autor
  </summary> <br />

- A função `nameAndAge` deverá ser implementada dentro do arquivo `nameAndAge.js`

- Retorne um array de objetos, cada objeto deve conter:

  - a chave `author`, e o valor deve ser o nome da pessoa autora
  - a chave `age`, e o valor deve ser a idade da pessoa autora quando lançou o livro

⚠️ Importante: A estrutura de dados `books` já está importada na linha 1 no arquivo desse exercício.
Para usar, descomente a importação.
<br/>
Esse trecho está comentado para evitar um erro de lint, uma vez que a variável não está sendo utilizada ainda.

</details>
