// Task 1: Introduction

// console.log('Hello, ES6');
console.log("Hello, I'm MObarok Hossen");




// ---------------------------------------------
// Task 2: Variables (let) and Scoping

let name = "Mobarok";






// Task 2: Execise 1: Fix the code to print 15

let age = 15;

for  (let age = 1; age <= 10; age++) {
    console.log(age);
 }

 console.log(age); // Should print 15 instead of 10


// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

let myDog = "Jack Russell Terrier";
let shortLeggies = true;

if (shortLeggies) {
    let myDog = "Welsh Corgie";
    console.log(myDog);
} else {
    let myDog = "Border Collie";
    console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier







// ---------------------------------------------
// Task 3: Variables (const) and Immutability

const firstName =  "Mobarok Hossen";
console.log(firstName);
//firstName =  "Joe";
//console.log(firstName);




// TASK 3: Exercise: Refactor the code to use let/const

const painter = {
    name: "Van Gogh",
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};

painter.birthDate = "March 30, 1853";
painter.paintings.push("Something");

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }



const player = {
    name: "Van Gogh",
    nationality: "Dutch",
};

Object.freeze(player);

player.ag = 29;
console.log(player);


// ---------------------------------------------
// TASK 4: Destructuring


const recipe = {
    name: "Cocolate Cake",
    ingredients: [
        'milk', 'sugar', 'maida', 'chocolate'
    ]
}
console.log(recipe)

// const name = recipe.name;
// const ingredients = recipe.ingredients;


const { name: myName, ingredients: myIngredients} =recipe;
console.log(myName, myIngredients);

const spices = ['cardomom', 'cumin', 'turmeric'];
const [first, second] = spices;
console.log(first, second);

// Task 4: Exercise: Extract data with destructuring

const ingredients = {
    tea: 'black',
    milk: 'soy',
    sweetener: 'honey',
    spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
}

// Destructure the parameters
function prepareChai({ tea, milk, spices, sweetener}) {

    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " + 
        "Simmer for 3 min. Serve masala chai hot or warm!");
}

prepareChai(ingredients);





// ---------------------------------------------
// TASK 5: Strings and Interpolation







// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

const country = "Bulgaria";
const city = "Sofia";

if (country.startsWith("Bulg")) {
    console.log("The country starts with Bulg");
}

if (city.startsWith("So")) {
    console.log("The name starts with So");
}

if (city.endsWith("a")) {
    console.log("The name ends with a");
}

console.log(
    `The capital of ${country}` +
    ` is the city of ${city}`
);









// ---------------------------------------------
// TASK 6: Arrow functions


const numbers = [1,2,3,4,5,6 ];
const calculation =  number => number * 2;
let doubleNumbers = numbers.map( calculation)

console.log(doubleNumbers)



// TASK 6: Exercise: Filter out only the prime numbers from the array
const inPrime = number =>  (number % 2 !== 0  && number !==1) || number === 2 ;
const primeNumbers = [1, 2, 3, 4, 5, 6].filter(inPrime)



console.log(primeNumbers);







// ---------------------------------------------
// TASK 7: Arrow functions and this







// Task 7: Exercise

function Translator() {
   this.phrase = "good day";
   this.englishBulgarianDictionary = {
       good: "добър",
       day: "ден"
   }
}

Translator.prototype.getBulgarianPhrase = function() {
   return this.phrase
       .split(" ")
       .map( (word) => this.englishBulgarianDictionary[word])
       .join(" ");
}
 
const translator = new Translator();
console.log(translator.getBulgarianPhrase());
