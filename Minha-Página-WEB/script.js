document.addEventListener('DOMContentLoaded', function() {
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagemContainer = document.getElementById('mensagemContainer');
    
    const mensagens = [
        "A persistência é o caminho do êxito!",
        "Programadores transformam café em código!",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Aprender programação é aprender a pensar de forma criativa."
    ];
    
    mensagemBtn.addEventListener('click', function() {
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        mensagemContainer.textContent = mensagemAleatoria;
        mensagemContainer.style.display = 'block';
    });
});