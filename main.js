$(document).ready(function() {
    // Quando o formulário for submetido
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const taskText = $('#task-input').val().trim(); // Obtém o texto da tarefa
        if (taskText !== "") {
            // Cria o item da lista <li>
            const li = $('<li></li>').text(taskText);

            // Adiciona evento de clique para alternar a classe 'completed'
            li.on('click', function() {
                // Alterna a classe 'completed' para marcar ou desmarcar a tarefa
                $(this).toggleClass('completed');
            });

            // Adiciona o item na lista
            $('#task-list').append(li);

            // Limpa o campo campo de entrada
            $('#task-input').val('');
        }
    });
});
