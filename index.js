const readline = require('readline-sync');

// arrow function
const askName = () => {
     const name = readlineSync.question("What is your name?");
     return name;
}

function checkAge(age){
    if (age < 30)
    {
        return "Young";
    } else {
        return "Old";
    }
}

// let name = askanem();
// console.log("Hi...  + (name). nice to met you.");

// let age = askage()
// console.log('oh you are (age) man.')

lower = 5;
upper = 10;
const randomNumber = Math.random(Math.random() * (10 + 1) );
console.log(randomNumber);