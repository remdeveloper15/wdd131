//Primero seleccionamos el de lo que ingresa el usuario en la pagina, en este caso le ponemos el nombre "input" y bucamos su nombre por el id, el cual es "favchap"
const input = document.querySelector("#favchap");

//Ahora seleccionamos el boton de "Add Chapter" por medio de querySelector, por su etiqueta "button"
const addChapter = document.querySelector("button");

//Seleccionamos ahora por medio de querySelector el elemento list. Su id es "list".
const list = document.querySelector("#list");

//Ahora tenemos que hacer que por cada input que nos de el usuario, se cree una escritura, y un boton de eleminar.

//Primero creamos un evento en donde cuando se hagla click se ejucute una funcion
addChapter.addEventListener("click", function() {
    
    //Dentro de la funcion usamos trim() para eliminar los espacios del incio y del final
    const userInput = input.value.trim();

    //Una declaracion if en caso de que lo que ingrese el usario no sea nada, envie una alerta
    if (userInput === "") {
        alert("Please, enter a scripture.");
        input.focus();
    }

    //En caso contrario que ejecute el codigo con normalidad 
    else {

        //Con este creamos un nuevo elemento "list" en el html
        const chapList = document.createElement("li");
        //Ademas creamos un nuevo boton
        const deleteButton = document.createElement("button");
        
        //Editamos el texto del boton por medio de textContet y tambien usamos el "value" par editarlo
        chapList.textContent = input.value;
        deleteButton.textContent = "❌";

        //Agregamos el boton de borrar a la lista, y tambien el imput
        chapList.append(deleteButton);
        list.append(chapList);

        //Nos aseguramos que el valor de input este en blancos y usamos focus() para que el cursor le permita ingresar algo nuevo sin problemas
        input.value = "";
        input.focus();

        //Finalmente creamos un evento para el boton delete, el cual con un click borra la escritura seleccionada
        deleteButton.addEventListener("click", function() {

            //Usamos removeChild para eliminar un elemento de la lista, y tambien focus para que el usario pueda ingresar algo nuevo
            list.removeChild(chapList);
            input.focus();
        })
    }
})


