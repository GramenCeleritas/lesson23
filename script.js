const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

const numbersOnlyArray = [];


for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    
}

console.log(sum);

let min = numbers[0];
let max = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Minimum value: " + min);
console.log("Maximum value: " + max); 

for (let i = 1; i <= 5; i++) {
    console.log("#".repeat(i));
  }