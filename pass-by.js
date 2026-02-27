function passBy (num1, num2){
    num1 = num1 - 5
    num2 = num2 - 10
    console.log(num1,num2);
    return num1 * num2;
}
let x = 10;
let y = 20;
console.log("after function calling", x, y);
const result = passBy (x, y);
console.log(result);
console.log(" before function calling");