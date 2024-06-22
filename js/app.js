document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao').addEventListener('click', function() {
        alert('Obrigado por se inscrever! Em breve entraremos em contato.');
    });

    document.getElementById('contato-form').addEventListener('submit', function(event) { 
        alert('Mensagem enviada! Obrigado por entrar em contato.');
    });
});
