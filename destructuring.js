const products = {
    name : "i phone",
    price : 5685214,
    description : "best amazing products"
}
const name = products.name;
const price = products.price;



const { name: randName, data, number, warranty= "3 year"} = {name:'Apple', data : 2015, number:25653}
console.log(warranty);


const [first, second]=[10, 20, 25, 24]
console.log(first);