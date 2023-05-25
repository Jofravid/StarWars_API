let personajes = obtenerDatos();

async function obtenerDatos() {
  try {
    let respuesta = await fetch("https://swapi.dev/api/people/");
    let datos = await respuesta.json();

    let totalPages = datos.count;
    let allPages = datos.results;
    let paginas = Math.trunc(totalPages / allPages.length);
    for (let page = 2; page <= paginas; page++) {
      paginaActual = page.toString();

      response = await fetch(
        "https://swapi.dev/api/people/?page=" + paginaActual
      );
      data = await response.json();
      allPages = allPages.concat(data.results);
    }
    personajes = allPages;
    console.log("objeto", allPages);
    servicioCompleto = 1;
    return allPages;
  } catch (error) {
    let myModal = document.getElementById("errorModal");
    $(myModal).modal("show");
  }
}

function mostrar(divResultado, inicio, fin) {
  try {
    divResultado.innerHTML = "";
    divResultado.appendChild(btnSiguiente);
    console.log("inicio ", inicio, " fin ", fin);
    for (let i = inicio - 1; i < fin; i++) {
      console.log("paso ", i);
      let infoPersonaje = document.createElement("div");
      infoPersonaje.classList = "card border border-0 bg-transparent rounded";
      infoPersonaje.innerHTML = `
                <div class="infoCard p-3 m-4" id="mostrar-personajes">
                    <p>${personajes[i].name}</p>
                    <p>Altura: ${personajes[i].height}</p>
                    <p>Peso: ${personajes[i].mass} kgs.</p>
                </div>
            `;
      divResultado.appendChild(infoPersonaje);
    }
  } catch (error) {
    let myModal = document.getElementById("errorModal");
    $(myModal).modal("show");
  }
}
const btnSiguiente = document.createElement("btn1");
btn1.addEventListener("mouseover", function () {
  let divResultado = document.getElementById("dondeMostrar1-5");
  mostrar(divResultado, 1, 5);
});

const btnSiguiente2 = document.createElement("btn2");
btn2.addEventListener("mouseover", function () {
  let divResultado = document.getElementById("dondeMostrar6-10");
  mostrar(divResultado, 6, 10);
});

const btnSiguiente3 = document.createElement("btn3");
btn3.addEventListener("mouseover", function () {
  let divResultado = document.getElementById("dondeMostrar11-15");
  mostrar(divResultado, 11, 15);
});
