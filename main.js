const form = document.getElementById('form-numeros');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const mensagemErro = `Infelizmente o número ${numeroB.value} não é maior que o número ${numeroA.value}`;
    const mensagemAcerto= `Parabéns, o número ${numeroB.value} é maior que o número ${numeroA.value}`;
    const paragrafoMensagem = document.querySelector('#message');
    
    function comparaNumeros(a,b) {
        const comparacao = a > b;
        return comparacao;
    }

    let valorComparacao = comparaNumeros(numeroA.value, numeroB.value);

    if (valorComparacao) {  
        paragrafoMensagem.style.display = 'block';   
        paragrafoMensagem.classList.add('error');
        paragrafoMensagem.innerHTML = mensagemErro;        
    } else {
        paragrafoMensagem.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';
        alert (mensagemAcerto);              
    }
})
