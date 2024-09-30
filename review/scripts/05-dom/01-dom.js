function changeText() {
    
    //document.getElementbyID 
    //Este llama al elemento y lo busca para usarlo en el javascript por medio de un id
    let paragraph = document.getElementById("myParagraph");

    //document.getElementByClassName llama al elemento y lo busca para usarlo en el javascript por medio su clase
    let paragraph1 = document.getElementsByClassName("paragraph1");
    console.log(paragraph1.length);

    //document.getElementByTagName llama al elemento y lo busca para usarlo en el javascrpit por medio de su una etiqueta
    let paragraph2 = document.getElementsByTagName("p");
    paragraph2[2].innerHTML = "Aaahh! I'm a Javascript now!"

    //Tambien podemos acceder a los elemento con los corchetes. 
    //Podemos usar la propiedad innerHTML para modificar elementos.
    paragraph1[0].innerHTML = "Now I'm a CSS D:";

    //textContent se usa para modificar el texto de un elemento
    paragraph.textContent = "Hello! I'm not paragraph D:"

    //style sirve para modificar el estilo como colo de un elemento
    paragraph.style.color = "red";

    //querySelector sirve para seleccionar un elemento de HTML. Se usa la misma sintaxis de CSS. Si es una clase ".", si es una etiqueta "p", si es un id "#"

    let elementID = document.querySelector("#paragraph3");
    elementID.innerHTML = "Please please please";
    elementID.style.color = "black"
    
    //querySelector con classes "."
    let elementClass = document.querySelector(".paragraph4");
    elementClass.innerHTML = "Lion Heart!!"
    elementClass.style.color = "orange"

    //querySelector con tag "#"
    //querySelectorAll sirve para seleccionar todos los elementos, ya sean de una tag name or a class.
    let elementTag = document.querySelectorAll("p");

    //The problem with querySelectorAll is that it returns a NodelList, thefore you have to convert into an array with "[...]"
    const elementTagArray = [...elementTag];
    console.log(elementTagArray);
    elementTagArray[5].innerHTML = "Mr. Blue..";
    elementTagArray[5].style.color = "pink";

    //Creating an element in HTML troughout Javascript
    //document.createElement is use to create a HTML element
    const paragraph10 = document.createElement("p");
    paragraph10.textContent = "Waoz";
    //Selecting the class where we going to add the new paragraph
    const fatherElement = document.querySelector(".father")
    //appedChild is use to add an element into a HTML
    fatherElement.appendChild(paragraph10);

    //Another method
    const paragraph11 = document.createElement("p");
    paragraph11.innerHTML = "This is easier then the other :D";
    fatherElement.appendChild(paragraph11);

    //Append is use to add more than one Node to into the HTML
    const paragraph12 = document.createElement("p");
    const paragraph13 = document.createElement("p");
    paragraph12.innerHTML = "Buuu!";
    paragraph13.innerHTML = "Aaaaahhh!";
    fatherElement.append(paragraph12, paragraph13);
}