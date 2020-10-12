//Constantes

const q = document.getElementById("input_buscador"); 

const indiceContador = document.getElementById("indiceContador");

const sectionListActividades = document.getElementById("section_lista_actividades");

const ContlistActividades = document.getElementById("cont_lista_actividades");

const listActividades = document.getElementById("lista_actividades");

const sectionActividadesActivas = document.getElementById("section_actividades_activas");

const listActividadesActivas = document.getElementById("lista_actividades_activas");

//Const Botones

const btnAgregar = document.getElementById("btn_agregar");

const btnEliminar = document.getElementById("btn_eliminar"); 

//const btnEliminarAct = document.getElementById("btn_eliminar_act");

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

let acti = [];

btnAgregar.addEventListener("click", function () {
    visible(sectionListActividades);

    const divCont = document.createElement('div');
    divCont.classList.add("botones");

    const lista = document.createElement('li');
    lista.innerHTML = (q.value); 

    const btnActi = document.createElement("button");
    const btnEdit = document.createElement('button');
    const btnElim = document.createElement('button');     

    listActividades.appendChild(divCont);
    divCont.appendChild(lista);
    divCont.appendChild(btnActi);
    divCont.appendChild(btnEdit);
    divCont.appendChild(btnElim);

    
    let count = acti.push(divCont);
    console.log(acti)  
    
});

// Agregar div en html

function addLista(actividad) {



 
}





// ELIMINAR 

function eliminar(padre, hijo) {
    let eliminarElemento = padre.removeChild(hijo);
}

// Eliminar toda la lista

btnEliminar.addEventListener("click", function () {
    eliminar(ContlistActividades, listActividades);
    location.reload();
});

// Eliminar actividad

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);



// Activar toda la lista

btnActivar.addEventListener("click", function () {
    visible(sectionActividadesActivas);
});
