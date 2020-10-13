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


// Funciones


// Visible

function visible(elemento) {
    elemento.classList.remove("noVisible");
}

// No visible

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
                            <li id="liAct${contador}">${q.value}</li>   
                            <button onclick="eliminarAct(${contador})">Eliminar</button>  
                            <button onclick="editarAct(${contador})">Editar</button> 
                            <button onclick="activarActividades(${contador})">Activar</button>                        
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
    //eliminar(ContlistActividades, listActividades);

    let removed = arrayAct.splice(0, arrayAct.length);

    //location.reload();
});

// Eliminar actividad 

function eliminarAct(contador) {

    let eli = document.getElementById(`${contador}`);
    noVisible(eli);
    let removed = arrayAct.splice(contador, 1);   
    console.log(arrayAct);  
}


// Editar actividad 

function editarAct(contador) {
    nuevoP = prompt('Nuevo nombre de la actividad')
    let edi = document.getElementById(`liAct${contador}`);
    edi.innerHTML = nuevoP;
}

// Activar una actividad  - cambiar q.value 

let arrayActActivas = [];

function activarActividades() {

    visible(sectionActividadesActivas);

    contador = contador + 1;       

    const divCont = document.createElement('div');
    
    let actividad =' '
    
    actividad += `<div id="${contador}" class="listCont">
                        <li id="liAct${contador}">${q.value}</li> 
                        <button onclick="eliminarAct(${contador})">Eliminar</button>  
                        <button onclick="editarAct(${contador})">Editar</button>                      
                    </div>`
    
    divCont.innerHTML = actividad; 
    
    listActividadesActivas.appendChild(divCont);

    let count = arrayActActivas.push(actividad);    
            
    console.log(arrayActActivas); 
}

/*

// Activar lista completa 

btnActivar.addEventListener("click", function () {
    visible(sectionActividadesActivas);

    //activarActividades();

    //let arrayActActivas = arrayAct.slice();

    //arrayActActivas.forEach(activarActividades);

    //eliminar(ContlistActividades, listActividades);

    let removed = arrayAct.splice(0, arrayAct.length);  

    console.log(arrayAct);      

});

*/