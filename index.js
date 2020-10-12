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

let arrayAct = [];

let contador = 0;


btnAgregar.addEventListener("click", function () {
    visible(sectionListActividades);
    addActividad();      
});

// Agregar actividad 

function addActividad() {
    contador = contador + 1;       

        const divCont = document.createElement('div');

        let actividad =' '
    
            actividad += `<div id="${contador}" class="listCont">
                            <p>"${q.value}"</p>   
                            <button onclick="eliminarAct(${contador})">Eliminar</button>  
                            <button onclick="eliminarAct(${contador})">Editar</button>                         
                        </div>`
    
        divCont.innerHTML = actividad; 
    
        listActividades.appendChild(divCont);
            
        let count = arrayAct.push(actividad);
            
        console.log(arrayAct); 
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

function eliminarAct(contador) {

    const eli = document.getElementById(`${contador}`);
    noVisible(eli);
    let removed = arrayAct.splice(contador, 1);   
    console.log(arrayAct);  
}


// Activar toda la lista

btnActivar.addEventListener("click", function () {
    visible(sectionActividadesActivas);
});
