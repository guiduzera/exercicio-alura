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

const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    
    

}

const deletarTarefa = (evento) =>{
    const botaodeleta = evento.target

    const deletarTarefa = botaodeleta.parentElement

    deletarTarefa.remove()
    
    return botaodeleta
}
})()