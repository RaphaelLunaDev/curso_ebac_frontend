function validarFormulario() {
    // Obtém os valores dos campos
    var numeroA = document.getElementById('numeroA').value;
    var numeroB = document.getElementById('numeroB').value;

    // Converte para números (parseFloat para permitir números decimais)
    numeroA = parseFloat(numeroA);
    numeroB = parseFloat(numeroB);

    // Valida se os valores são números e se o número B é maior que o número A
    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert("Por favor, insira números válidos em ambos os campos.");
        return false; // Impede o envio do formulário
    }

    if (numeroB <= numeroA) {
        alert("O número B deve ser maior que o número A.");
        return false; // Impede o envio do formulário
    }

    alert("Formulário válido!");
    return true; // Permite o envio do formulário
}
