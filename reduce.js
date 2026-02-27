const number = [1,2,3,4,5,6];
let sum = 0;
for (const num of number){
    sum = sum + num 
}
console.log(sum);

// reduce use 
const total = number.reduce((ace, num)=> ace + num, 0)  
console.log(total);