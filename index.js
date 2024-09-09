// Função para retornar ao estado inicial da página
function voltarHome() {

    // Limpa a seção de resultados
    document.getElementById("resultados-pesquisa").innerHTML = `
        <div id="sobre" class="sobre-container">
            <h2>Sobre</h2>
            <p>Este site foi criado com o objetivo de fornecer informações resumidas sobre os mapas do CS2. Aqui, você pode pesquisar seus mapas favoritos e conhecer mais sobre eles!</p>
            <p>Basta realizar a pesquisa pelo nome do mapa que procura. A busca pode ser realizada por
            palavras-chave, mas é sempre recomendado digitar o nome corretamente para obter os melhores
            resultados. Caso não encontre o mapa em minha base de dados, me envie um e-mail para que possamos
            ajustar a página e incluir esses dados.</p>
        </div>
    `;
    // Adiciona a classe "sobre-ativo" à seção "Sobre"
    document.getElementById("sobre").classList.add("sobre-ativo");
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
    
   // Adiciona a classe "card-resultado" a todos os cards e força o navegador a recalcular os estilos
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.classList.add("card-resultado");
    requestAnimationFrame(() => {
      card.style.backgroundColor = getComputedStyle(card).backgroundColor;
    });
  });
}

