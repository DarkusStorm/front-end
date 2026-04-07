function pagina() {
    const div = document.querySelector(".container")

    const titulo = document.createElement('h2');
    titulo.textContent = "Lista de Tarefas";

    const input = document.createElement('input');
    input.id = 'tarefaInput';
    input.type = 'text';
    input.placeholder = 'Digite uma tarefa';

    const botao = document.createElement('button');
    botao.textContent = 'Adicionar Tarefa';
    botao.id = 'btn-adicionar';
    
    const lista = document.createElement('ul');
    lista.id = 'listaTarefas';

    div.appendChild(titulo);
    div.appendChild(input);
    div.appendChild(botao);
    div.appendChild(lista);

    /*
    // HTML:
    <div class="container">
        <h2>Lista de Tarefas</h2>
        <input type="text" id="tarefaInput" placeholder="Digite uma tarefa">
        <button id="btn-adicionar">Adicionar Tarefa</button>
        <ul id="listaTarefas"></ul>
    </div>
    
    // JavaScript:
    const input = document.getElementById("tarefaInput")
    const botao = document.getElementById("btn-adicionar");
    const lista = document.getElementById("listaTarefas");
    */

    botao.addEventListener("click", () => {
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim(); // Retorna o valor sem os espaços em branco antes e depois;

        if (texto === "") {
            alert("Digite algo!");
            return;
        }

        novaTarefa.textContent = texto;
        novaTarefa.classList.add('destaque');
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());
        novaTarefa.style.color = "#333";

        lista.appendChild(novaTarefa);

        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destaque"); // Remove a Classe HTML "destaque";
            novaTarefa.classList.add("removido"); // Acrescenta a classe HTML "removido";
            novaTarefa.innerHTML += " (removida)";
            setTimeout(() => { lista.removeChild(novaTarefa); }, 1000);

            input.value = "";

        });

    });
}