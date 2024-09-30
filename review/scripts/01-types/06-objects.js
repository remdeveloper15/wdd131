let name = "Tanjiro";
let anime = "Kimetsu no Yaiba";
let age = 16;

/* Creating an object */
let character = {
    name: name, 
    anime: anime,
    age: age,
};

/* Accessing to an object*/
console.log(character);

/* Accessing to an object property*/
console.log(character.age);

/* Accessing to an object property with other syntax*/
console.log(character["name"]);

/* Modifying a property */
character.age = 17;

character["age"] = 17;

console.log(character);

/* Erasing a property */
delete character.anime;
console.log(character);
