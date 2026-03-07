// Aguarda a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega o botão pelo ID
    var botao = document.getElementById('botao-copiar');
    
    // Verifica se o botão existe na página
    if (botao) {
        
        // Quando clicar no botão, executa essa função
        botao.addEventListener('click', function() {
            
            // Pega o texto do prompt (pelo ID)
            var textoPrompt = document.getElementById('conteudo-prompt');
            
            // Copia o texto para a área de transferência
            navigator.clipboard.writeText(textoPrompt.innerText)
                .then(function() {
                    // Sucesso! Muda o texto do botão temporariamente
                    var textoOriginal = botao.innerText;
                    botao.innerText = '✅ Copiado!';
                    botao.style.backgroundColor = '#45a049';
                    
                    // Volta ao normal depois de 2 segundos
                    setTimeout(function() {
                        botao.innerText = textoOriginal;
                        botao.style.backgroundColor = '#4CAF50';
                    }, 2000);
                })
                .catch(function(err) {
                    // Erro (caso algo dê errado)
                    alert('Erro ao copiar: ' + err);
                });
        });
    }
});