function validarFormulario(event) {
    // Impede o envio do formulário
    event.preventDefault();
    
    // Pegando os valores dos campos
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);
    
    // Pegando os elementos de entrada
    const inputA = document.getElementById('valorA');
    const inputB = document.getElementById('valorB');
    
    // Pegando o elemento da mensagem
    const mensagemDiv = document.getElementById('mensagem');
    
    // Removendo qualquer borda vermelha ou mensagem anterior
    inputA.classList.remove('erro');
    inputB.classList.remove('erro');
    mensagemDiv.classList.remove('erro-msg', 'sucesso-msg');
    mensagemDiv.textContent = '';
    
    // Verificando se Valor B é maior que Valor A
    if (valorB <= valorA) {
        // Adicionando a classe de erro (borda vermelha)
        inputA.classList.add('erro');
        inputB.classList.add('erro');
        
        // Exibindo mensagem de erro
        mensagemDiv.classList.add('erro-msg');
        mensagemDiv.textContent = 'Erro: O Valor B deve ser maior que o Valor A!';
        return false;  // Impede o envio do formulário
    }
    
    // Caso tudo esteja correto, exibe mensagem de sucesso
    mensagemDiv.classList.add('sucesso-msg');
    mensagemDiv.textContent = 'Validação bem-sucedida! O Valor B é maior que o Valor A.';
    
    // Caso queira, pode enviar o formulário aqui, mas no exemplo, estamos apenas mostrando a mensagem
    return true;
}
