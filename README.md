# Atividade: Pixel Art

Para começar, acesse [este link](), faça fork e clone o repositório.

## Introdução

No repositório clonado foi fornecido o código HTML e CSS. Neste caso apenas se preocupe em entender como os códigos estão funcionando.

Nesta entrega você irá criar um quadro para Pixel Art. Veja o exemplo: 

![](https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/sprint3/activity-pixel-art/atividade-pixel-art-2.gif)

## Seu objetivo:

Criar um quadro de pixel art de modo que seu projeto tenha o mesmo comportamento do exemplo anterior.

## Início


Como os códigos HTML e CSS já estão prontos, agora é hora de partir para o JavaScript.

No exemplo acima, vimos que **ao clicar no botão Criar Tabela**, uma nova tabela é criada.

- Passo 1: Realizar a criação das variaveis.
```js
let currentColor = '#000';
const input = document.getElementById('colorPicker');
const container = document.getElementsByClassName('container')[0];

```

- Passo 2: Criar uma função que gere a nova tabela.
```js
const createTable = () => {
    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        for (let j = 0; j < 20; j++) {
            const pixel = document.createElement('span');
            // ADICIONA A CLASSE QUE POSSUI OS ESTILOES PADRÃO DOS QUADRADOS DA TABELA
            pixel.addEventListener('click', () => updateColor(currentColor, pixel));
            line.appendChild(pixel);
        }
        container.appendChild(line);
    }
}

```

- Passo 3: Criar uma função que altere a variavel da cor atual.
```js
const changeCurrentColor = (e) => {
    currentColor = e.target.value;
}
```

- Passo 4: Criar uma função que altere a cor atual do quadrado.
```js
const updateColor = (currentColor, element) => {
    //SELECIONE O ELEMENTO E ATUALIZE A PROPRIEDADE BACKGROUND CONFORME A VARIAVEL (currentColor) => element.style.backgroundColor
}
```

- Passo 5: Criar o evento de mudança, para quando o INPUT for alterado deverá alterar a cor da palheta.
```js
input.addEventListener('change', (e) => changeCurrentColor(e)) //Quando o evento 'change' é acionado no input a função changeCurrentColor(e) será chamada.
```

- Passo 6: Chamar a função para a tabela ser criada.
```js
createTable();
```

## Desafio

Agora é sua vez. Desperte sua criatividade e cria uma tabela dinâmicamente, onde o usuário insere um valor numérico e a tabela é criada com a mesma largura e altura. 

Atenção: quando uma tabela for criada a anterior não deve existir mais.
