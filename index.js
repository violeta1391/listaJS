//Constantes

const q = document.getElementById("input_buscador");

const sectionListActividades = document.getElementById("section_lista_actividades");

const ContlistActividades = document.getElementById("cont_lista_actividades");

const listActividades = document.getElementById("lista_actividades");

const sectionActividadesActivas = document.getElementById("section_actividades_activas");

const listActividadesActivas = document.getElementById("lista_actividades_activas");

//Const Botones

const btnAgregar = document.getElementById("btn_agregar");

const btnEliminar = document.getElementById("btn_eliminar");

const btnActivar = document.getElementById("btn_activar");

const btnDesactivar = document.getElementById("btn_desactivar");

// Funciones

// Hacer visible

function visible(elemento) {
    elemento.classList.remove("noVisible");
}

// Hacer no visible

function noVisible(elemento) {
    elemento.classList.add("noVisible");
}

// Agregar elementos a la lista

btnAgregar.addEventListener("click", function () {
    visible(sectionListActividades);
    addLista(q.value, listActividades);
});

//agregar div en html

function addLista(actividad, idDiv) {
    let resultsHTML = " ";
    resultsHTML += `<div id="${indiceContador}">
                      <p class="">"${actividad}"</p> 
                      <button type="submit">Eliminar</button>
                      <button type="submit">Activar</button>
                      <button type="submit">Editar</button>                                                         
                  </div>`;

    idDiv.innerHTML = resultsHTML;
}

// Eliminar toda la lista

btnEliminar.addEventListener("click", function () {
    eliminar(ContlistActividades, listActividades);
    noVisible(sectionListActividades);
    noVisible(sectionActividadesActivas);
});

function eliminar(padre, hijo) {
    let eliminarElemento = padre.removeChild(hijo);
}

// Activar toda la lista

btnActivar.addEventListener("click", function () {
    visible(sectionActividadesActivas);
});
