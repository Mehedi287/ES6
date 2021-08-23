const numbers = [9, 62, 52, 6553, 525, 22, 5, 2, 5, 25, 25, 2, 52];
const max = Math.max(...numbers);
console.log(max);
// old mathood 
const numbers2 = [...numbers];
numbers2.push(12);
console.log(numbers2);
console.log(...numbers);