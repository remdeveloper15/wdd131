let user = {
    id: 1,
    name: "Josh",
    age: 25,
}

for (let property in user) {
    console.log(property, user[property]);
}

//Don't do this :P

let animals = ["Monkey", "Snake", "Rabbit"];

for (let animal in animals) {
    console.log(animal, animals[animal]);
}

