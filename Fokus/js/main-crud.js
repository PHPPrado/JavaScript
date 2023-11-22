const btnAdicionar = document.querySelector('.app__button--add-task');
const formAdicionar = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');

const tarefas = [];

btnAdicionar.addEventListener('click', ()=>{
    formAdicionar.classList.toggle('hidden');
})

formAdicionar.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
})