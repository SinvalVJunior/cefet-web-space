// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', () => {
    const constanteG = document.querySelector('#constante').value;
    const massa1 = document.querySelector('#massa1').value;
    const massa2 = document.querySelector('#massa2').value;
    const distancia = document.querySelector('#distancia').value;
    const resultado = (constanteG * massa1 *  massa2) / (distancia ** 2);
    
    document.querySelector('#resultado').value = resultado;
});