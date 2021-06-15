// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const expandirTexto = (event) => {

    const botaoClicado = event.currentTarget;
    const paragrafo = botaoClicado.parentNode;
    const adicionou = paragrafo.classList.toggle('expandido');

    if(adicionou) {
        botaoClicado.innerHTML = '-';
    } else {
        botaoClicado.innerHTML = '+';
    }
}

const paragrafos = document.querySelectorAll('.botao-expandir-retrair');
paragrafos.forEach(paragrafo => paragrafo.addEventListener('click', expandirTexto));