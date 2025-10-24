const portfolio = document.querySelector("#miau");

async function datos(raw) {
    try {
        let consulta = await fetch(raw);
        let resultado = await consulta.json();
        let trabajos = resultado.data;
        console.log(trabajos);
        trabajos.forEach((trabajo) => {
            portfolio.innerHTML += `

                            <div class="col">
                                <div class="card shadow-sm">
                                <img src="${trabajo.photo}" class"card-img-top">
                                <div class="card-body">
                                <p class="card-text">${trabajo.title}</p>
                                <p class="card-text">${trabajo.description}</p>
                                <div class="d-flex
                                justify-content-between
                                align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn btn-outline-secondary">${trabajo.category}</button>
                                </div>
                                <small class="text-body-secondary">Reciente</small>
             </div>
             </div>
            </div>
            </div>`;
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}


datos("https://api.myjson.online/v1/records/216dc459-99d0-4904-a828-77fe8e6ffbc0");

