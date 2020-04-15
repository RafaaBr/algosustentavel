# Algo sustentável

Isso é um projeto da faculdade onde o tema é sustentabilidade.

### Boas práticas

> HTML
  - Não duplicar código
  - Colocar ID e Class nos elementos pra acessar no CSS e JS

```
<header class="header" id="header-id">
    <img class="logo" id="logo-id" src="#" alt="Imagem da logo">
    <nav class="navegation">
        <a href="#">Home</a>
        <a href="#">Artigos</a>
        <a href="#">Ideias</a>
    </nav>
</header>
```

> CSS
  - Utilizar seletores em cascata pra melhor precisão
  - 1 espaço após o seletor
  - 1 linha de distância depois de finalizar 1 bloco

```
#header-id {
    display: grid;
}

#header-id .logo {
    width: 50px;
    margin: 0 10px;
    cursor: pointer;
}
```

> Javascript
  - Armazenar os elementos html em variáveis constantes.
  - Após definir o nome de uma function é necessário 1 espaço antes e depois dos ()
  - Espaço de 1 linha após finalizar um bloco de instrução

```
const image = document.getElementById('logo-id')

image.onclick = function () {
  alert('Você clicou no botão "Home".')
}
```

## Tecnologias utilizadas

* HTML5
* CSS
* Javascript

## Desenvolvedores

* **Raphael Henriques** - [RafaaBr](https://github.com/RafaaBr)

* **Michel França** - [immichjs](https://github.com/immichjs)


Para ver a lista de [contribuidores](https://github.com/RafaaBr/algosustentavel/contributors) e quem participa desse projeto.
