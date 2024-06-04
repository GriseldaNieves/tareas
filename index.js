const fecha= document.querySelector("#fecha")
const lista=document.querySelector("#lista")
const input=document.querySelector("#input")
const enter=document.querySelector("#enter")
const check= 'fa-check-circle'
const uncheck='fa-circle'
const tachar = 'tachado'
let id= 0

function agregarTarea(tarea, id, realizado, eliminado){

    if(eliminado){return}

    const REALIZADO= realizado ? ckeck: uncheck
    const LINE= realizado? tachar: ""

    const elemento=` <li id="elemento">
                    <svg data="realizado" class="${REALIZADO}" class="i" id="circulo" id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fafafb" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                    <p class="text ${LINE}">${tarea}</p>
                        <svg data="eliminado" class="i" id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fafafb" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                     </li>`

lista.insertAdjacentHTML("beforeend",elemento)
}

function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(tachar)
}

function tareaEliminada(element){
    console.log(element.parentNode.parentNode)
    lista.removeChild(element)
    // element.parentNode.parentNode.removeChild(element.parentNode)
}

enter.addEventListener('click',()=>{
    const tarea =input.value
    if(tarea){
        agregarTarea(tarea, id, false, false)
    }
    input.value=''
    id++
})

document.addEventListener('keyup',function(event){
    if(event.key=='Enter'){
        const tarea=input.value
        if(tarea){
            agregarTarea(tarea, id, false, false)
        }
        input.value=""
        id++
    }
})

lista.addEventListener('click', function(event){
    const element= event.target
    console.log(event.target.parentNode);
    const elementData= element.parentNode.attributes.data.value   
    if(elementData==='realizado'){
        tareaRealizada(element)
    }
    else if(elementData==='eliminado'){
        tareaEliminada(element.parentNode.parentNode)
    }
})