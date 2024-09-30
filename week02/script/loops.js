myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  //let favoriteFood1 = document.createElement("li");
  //favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  //let favoriteFood2 = document.createElement("li");
  //favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  //let favoriteFood3 = document.createElement("li");
  //favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  //let favoriteFood4 = document.createElement("li");
  //favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  //document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  //document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  //document.querySelector("#favorite-foods").//appendChild(favoriteFood3);
  //document.querySelector("#favorite-foods").appendChild(favoriteFood4);

  //const foods = document.querySelector("#favorite-foods");
  //function getFavoriteFood(food) {
  //  let favoriteFood = document.createElement("li");
  //  favoriteFood.textContent = food;
  //  foods.appendChild(favoriteFood);
  //}

  //myInfo.favoriteFoods.forEach(getFavoriteFood);

  //const foods = document.querySelector("#favorite-foods");

  //function getFavoriteFood(food)
  //{
  //  let favoriteFood = document.createElement("li");
  //  favoriteFood.textContent = food;
  //  foods.appendChild(favoriteFood);
  //}

//myInfo.favoriteFoods.map(getFavoriteFood);

const foods = document.querySelector("#favorite-foods");

const favoriteFood = myInfo.favoriteFoods.map((food) => `<li> ${food}</li>`);

//join sirve para unir algunos elementos a una lista
foods.innerHTML = favoriteFood.join("");

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
let days = ["Monday", "Tuesday", "Thusday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i = 0; i < studentReport.length; i++)
{
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

let i = 0;

while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

studentReport.forEach(element => {
  if (element < LIMIT) {
    console.log(element);
  }
});

for (let element in studentReport) {
  if (studentReport[element] < LIMIT){
    console.log(studentReport[element]);
  }
}

let number = 0
days.forEach(element => {
  number++;
  console.log(`${number} - ${element}`);
});






  
  
