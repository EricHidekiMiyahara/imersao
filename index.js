function pesquisar() {
    let section = document.getElementById("mapas"); console.log(section);

let resultados = "";

for (let dado of dados) {
    resultados += `<div class="card">
              <h3>${dado.titulo}</h3>
              <img src="img/mirage.jpeg" alt="Mapa Mirage">
              <p>${dado.descricao}</p>
            </div>`
}

section.innerHTML = resultados;
}

