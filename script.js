let currentColor = '#000';
const input = document.getElementById('colorPicker');
const container = document.getElementsByClassName('container')[0];

const createTable = () => {
    for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        for (let j = 0; j < 20; j++) {
            const pixel = document.createElement('span');
            // ADICIONA A CLASSE QUE POSSUI OS ESTILOES PADRÃO DOS QUADRADOS DA TABELA
            pixel.classList.add('pixel');
            pixel.addEventListener('click', () => updateColor(currentColor, pixel));
            line.appendChild(pixel);
        }
        container.appendChild(line);
    }
}
const changeCurrentColor = (e) => {
    currentColor = e.target.value;
    console.log(currentColor)
}
const updateColor = (currentColor, element) => {
    //SELECIONE O ELEMENTO E ATUALIZE A PROPRIEDADE BACKGROUND CONFORME A VARIAVEL
    //changeCurrentColor(currentColor) => element.style.backgroundColor
    element.style.backgroundColor = `${currentColor}`
}
input.addEventListener('change', (e) => changeCurrentColor(e)) //Quando o evento 'change' é acionado no input a função changeCurrentColor(e) será chamada.

createTable();
