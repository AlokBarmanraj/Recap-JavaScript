function reference (num1, num2){

    num1[0]= 100
    num2[0]= 200
    const first =num1[0]
    const second =num2[0]
    return first + second;
}
const num1 =[1,2,3];
const num2 =[4,5,6];
console.log("after the function call", num1, num2);
const result = reference(num1,num2);
console.log("before the function call", num1, num2);