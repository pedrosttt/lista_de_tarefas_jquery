// Função que é executada após o carregamento do documento
$(document).ready(function() {
    // Array para armazenar as tarefas
    var tasks = [];

    // Função para atualizar a lista de tarefas na página
    function updateTaskList() {
        $("#task-list").empty(); // Limpa a lista
        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            var taskClass = task.completed ? "completed" : "";
            // Adiciona cada tarefa à lista
            $("#task-list").append('<li class="' + taskClass + '">' + task.name + '</li>');
        }
    }

    // Manipulador de evento para o envio do formulário
    $("#task-form").submit(function(event) {
        event.preventDefault();
        var taskName = $("#task-input").val().trim();
        if (taskName !== "") {
            tasks.push({ name: taskName, completed: false });
            updateTaskList();
            $("#task-input").val("");
        }
    });

    // Manipulador de evento para clicar em um item da lista
    $(document).on("click", "li", function() {
        var index = $(this).index();
        tasks[index].completed = !tasks[index].completed;
        updateTaskList();
    });
});
