(() => {
    const criarTarefas = (evento) => {
    evento.preventDefault()
    const Input = document.querySelector('[data-form-input]')
    const valor = Input.value
    
    const lista = document.querySelector ('[data-list]')

    const Conteudo = `<p class="content">${valor}</p>`
    
    const Tarefa = document.createElement('li')
    Tarefa.classList.add('task')
    lista.appendChild(Tarefa)
    Tarefa.innerHTML = Conteudo
    Tarefa.appendChild(botaoConcluirTarefas())
    Tarefa.appendChild(DeleteButton())
    

    
}
const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', criarTarefas)

const botaoConcluirTarefas = () =>{
    const Concluir = document.createElement('button')

    Concluir.classList.add('check-button')
    Concluir.innerText = 'concluir'
    Concluir.addEventListener('click', concluirTarefa)
        
    return Concluir
}

const concluirTarefa = (evento) =>{
    const confirmar = evento.target

    const tarefaCompleta = confirmar.parentElement

    tarefaCompleta.classList.toggle('done')
}

function DeleteButton() {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerText = 'delete'
    deleteButton.addEventListener('click', deleteTask)

    return deleteButton
}

const deleteTask = (evento) => {
    const locateTarget = evento.target
    const deletedTask = locateTarget.parentElement
    deletedTask.remove()
}
})()