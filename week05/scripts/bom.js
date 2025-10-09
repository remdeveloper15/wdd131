/*HTML references */

const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

/*Add Scripture function*/

button.addEventListener("click", function() {
    
    /*If input is empty, display an aler*/

    if (input.value.trim() === "")
    {
        alert("Please insert a scripture.")
        input.focus();
        return;

    /*If input is not empty then*/

    } else {

        /*Display the added scripture in the list*/

        displayList(input.value);

        /*Add the scripture in the localStorage array*/

        chaptersArray.push(input.value);

        /*Save the array in the localStorage*/

        setChapterList();

        /*Clean the text field*/
        input.value = "";

        /*Focus the cursor in the text field*/
        input.focus();
    }
});

/*Inializate the arary from localStorage. Call the getChapterList() function to get data from localStorage. If there is nothing saved, then use and empty array*/

chaptersArray = getChapterList() || [];

/*Display the saved scriptures on screen */

chaptersArray.forEach(chapter => {
   displayList(chapter); 
});

/*displayList function*/

function displayList(item) {

    /*Create a new li element and a new button element*/

    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    /*The text in li will be the chapter (item)*/

    li.textContent = item;

    /*The button will have an "X" and the class "delete"*/
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");

    /*Add the button inside li and the li inside the ul in HTML*/

    li.append(deleteButton);
    list.append(li);

    /*Function of the delete button*/

    deleteButton.addEventListener('click', function () {

    /*Delete the li of the screen*/
    list.removeChild(li)

    /*Call deleteChapter(li.textconten) to delete from the localStorage array*/
    deleteChapter(li.textContent);
    input.focus();
});

console.log("I like to copy instead of typing out myself tryin to understand it ");
};

/*Save data in localStorage */

function setChapterList() {

    /*localStorage.setItem(key, value) save data in the localStorage. chpatersArray it becomes an string with JSON.stringify(). Key is "myfavBOMlist*/

    localStorage.setItem("myfavBOMlist", JSON.stringify(chaptersArray));
};


/*Recover data from localStorage*/

function getChapterList() {

    /*localStorage.getItem("myFavBOMlist") recovers the saved text. JSON.parse() it convert into an array againa*/

    return JSON.parse(localStorage.getItem("myfavBOMlist"));
};


/*Delete chapters from localStorage array */
function deleteChapter(chapter) {

    /*chapter.slice(0, chapter.length -1) delete the last character (the "X") */

    chapter = chapter.slice(0, chapter.length -1);

    /*.filter() create a new arraay without the erased chapter*/

    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    /*Finally calls the setChapterList() to update the localStorage*/

    setChapterList();
}




