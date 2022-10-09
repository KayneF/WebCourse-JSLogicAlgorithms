
const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const textoFundo = estilosBody.backgroundColor;

for (let valor of p) {
    valor.style.backgroundColor = textoFundo;
    valor.style.color = 'white';
}
