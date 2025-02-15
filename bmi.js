//

const readline = require('readline-sync');

let b = 2;
let m = 4;
let i = 8;

let bmi = (Math.pow(b, 2)) -  (4*b*i);
if(bmi < 0 ){
    console.log("Berat Badan Kurang")
} else if (bmi === 0){
    console.log("Berat Badan Normal")
    x1 = (-m + Math.sqrt(bmi))/(2*a)
    x2 = (-m - Math.sqrt(bmi))/(2*a)
    console.log("Akar-Akarnya adalah " + x);
} else if (bmi > 0 ){
    x1 = (-m + Math.sqrt(bmi))/(2*a)
    x2 = (-m - Math.sqrt(bmi))/(2*a)
    console.log("Overload Weight"  + x1 + "dan" + x2);
}