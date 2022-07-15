
function main() {

    const container = document.querySelector('.container');
    const div = document.createElement('div');

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'section', texto: 'Frase 3'},
        {tag: 'h2', texto: 'Frase 4'},
    ];

    for (let i=0; i<elementos.length; i++) {
        let {tag, texto} = elementos[i];
        let elemento = document.createElement(tag);
        elemento.innerText = texto;
        // let textNode = document.createTextNode(texto);
        // elemento.appendChild(textNode);
        div.appendChild(elemento);
    }
    container.appendChild(div);
}

main();