
// for-of === Array
const number =[1, 2, 3, 4, 5,6];
for (const num of number){
    console.log(num);
}



// for- in === Object
const products ={
    name: "i phone 17",
    price : 528654,
    brand : "apple"
};

for (const product in products){
    const productValue = products[product];
    console.log(product, productValue);
}