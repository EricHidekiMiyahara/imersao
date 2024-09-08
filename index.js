// Função para retornar ao estado inicial da página
function voltarHome() {

    // Limpa a seção de resultados
    document.getElementById("resultados-pesquisa").innerHTML = `
        <div id="sobre" class="sobre-container">
            <h2>Sobre</h2>
            <p>Este site foi criado com o objetivo de fornecer informações detalhadas sobre livros, incluindo
                sinopses e avaliações. Aqui, você pode pesquisar seus livros favoritos e conhecer novas
                histórias!</p>
            <p>Alguns dos livros que você encontrará aqui são as principais fontes para filmes e séries populares.
                Portanto, além de explorar os livros, você também pode descobrir as origens de suas adaptações
                audiovisuais favoritas.</p>
            <p>Basta realizar a pesquisa pelo nome do livro que procura. A busca pode ser realizada por
                palavras-chave, mas é sempre recomendado digitar o nome corretamente para obter os melhores
                resultados. Caso não encontre o livro em nossa base de dados, nos envie um e-mail para que possamos
                ajustar a página e incluir esses dados.</p>
        </div>
    `;
}

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um mapa.</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `<div class="card">
              <h3>${dado.titulo}</h3>
              <p>${dado.descricao}</p>
            </div>`
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum mapa foi encontrado.</p>"
    }

    section.innerHTML = resultados;
}

