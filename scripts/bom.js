const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");



button.addEventListener("click", function() {
    if (input.value.trim() === "")
    {
        alert("Please insert a scripture.")
        input.focus();
        return;
    } else {
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        
        li.textContent = input.value;deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);input.focus();
});
    }
    
    input.value = "";
    input.focus();
});



