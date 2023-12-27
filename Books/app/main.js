let livros = [];
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivros();
const elementoInserirLivros = document.getElementById('livros');

async function getBuscarLivros(){
    const res = await fetch(endpointApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
}

function exibirLivros(livros){
    elementoInserirLivros.innerHTML = '';
    livros.forEach(livro => {
        elementoInserirLivros.innerHTML += `
            <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

function aplicarDesconto(livros){
    const desconto =  0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
    return livrosComDesconto;
}

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirLivros(livrosFiltrados)
}