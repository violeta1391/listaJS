//Constantes

const q = document.getElementById("input_buscador");

const sectionListActividades = document.getElementById("section_lista_actividades");

const ContlistActividades = document.getElementById("cont_lista_actividades");

const listActividades = document.getElementById("lista_actividades");

const sectionActividadesActivas = document.getElementById("section_actividades_activas");

const listActividadesActivas = document.getElementById("lista_actividades_activas");

const sectionEliminar = document.getElementById("section_eliminar");


//Const Botones

const btnAgregar = document.getElementById("btn_agregar");

const btnEliminar = document.getElementById("btn_eliminar");


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

// Agregar apretando enter

function onKeyUp(event) {
    var keycode = event.keyCode;
    if (keycode == '13') {
        visible(sectionListActividades);
        visible(sectionEliminar);
        addActividad();
    }
}

// Agregar apretando con click en el boton 

btnAgregar.addEventListener("click", function () {
    visible(sectionListActividades);
    visible(sectionEliminar);
    addActividad();
});

// Agregar actividad 

let contador = 0;

function addActividad() {

    contador = contador + 1;

    const divCont = document.createElement('div');

    let t = q.value;

    let actividad = ' '

    actividad += `<div id="actividad${contador}" class="listCont" >
                            <li id="liAct${contador}">${t}</li> 
                            <div id="botones_lista${contador}" class="container-fluid">
                                <button class="myBtn" id="eliminarAct(${contador})" onclick="eliminarAct(${contador})">Eliminar</button>  
                                <button class="myBtn" id="editar(${contador})" onclick="editar(${contador})">Editar</button> 
                                <button class="myBtn" id="activarActividades${contador}" onclick="activarActividades(${contador})">Activar</button> 
                            </div>                         
                    </div>`

    divCont.innerHTML = actividad;   



    // Verificacion 

    if (t === "") {
        alert("Agregar actividad");
    } else {
        listActividades.appendChild(divCont);
    }

    q.value = "";
}


// Eliminar todo

btnEliminar.addEventListener("click", function () {
    location.reload();
});

// Eliminar actividad 

function eliminarAct(contador) {
    let eli = document.getElementById(`actividad${contador}`);
    noVisible(eli);
}


// Editar actividad 

function editar(contador) {

    // Seleccionar li

    let eli = document.getElementById(`liAct${contador}`);

    // Crear div con input y button para editar text de li

    const divEditar = document.createElement('div');
    const inputEditar = document.createElement('input');
    const btnAceptar = document.createElement('button');
    btnAceptar.id = "buttonAceptar";
    btnAceptar.className = "myBtn";
    btnAceptar.textContent = "Aceptar";

    eli.appendChild(divEditar);
    divEditar.appendChild(inputEditar);
    divEditar.appendChild(btnAceptar);

    // Verificacion 

    btnAceptar.addEventListener("click", function () {
        if (inputEditar.value === "") {
            alert("Agregar actividad");
        } else {
            eli.textContent = inputEditar.value;
        }
    })
}


// Activar una actividad  

function activarActividades(contador) {

    visible(sectionActividadesActivas);

    // Cambiar de posicion actividad

    const divCont = document.createElement('div');

    let ediD = document.getElementById(`actividad${contador}`);

    divCont.appendChild(ediD);

    listActividadesActivas.appendChild(divCont);

    // Eliminar btn activar 

    let eli = document.getElementById(`activarActividades${contador}`);
    noVisible(eli);


    // Crear boton desactivar y volver a lista de actividades 

    let botones = document.getElementById(`botones_lista${contador}`);

    const btnDesactivar = document.createElement('button');
    btnDesactivar.className = "myBtn";
    btnDesactivar.textContent = "Desactivar";
    botones.appendChild(btnDesactivar);

    btnDesactivar.addEventListener("click", function () {
        noVisible(btnDesactivar);
        visible(eli);
        listActividades.appendChild(divCont);
    })
}

