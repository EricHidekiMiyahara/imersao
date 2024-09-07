function pesquisar() {
    let section = document.getElementById("mapas"); console.log(section);

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

