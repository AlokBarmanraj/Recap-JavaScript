const numbers =[1,2,3,4,5,6];

const double =[]
for (const num of numbers){
    double.push (num * 2);
}
console.log(double);



// map use 
const doubleet = num => num * 2;
const doublel = numbers.map(doubleet);
console.log(doublel);

// or system 
const doub = numbers.map(num=>num*2);
console.log(doub);



const friend = ['kamal','jamal','korim']
const firstLetter = friend.map (fb => fb[0]);
console.log(firstLetter);



const products =[
    {name: 'laptop', price: 45785514},
    {name: 'pc', price: 45785514},
    {name: 'monitor', price: 45785514},
    {name: 'mobile', price: 45785514},
];
const productPrice = products.map (pd => pd.price);
console.log(productPrice);



const productName = products.map (pd =>{
    const upperCase = pd.name.toUpperCase();
    return upperCase;

} );




const productNames = products.map ((pd, index, productsArray) =>{
    const upperCase = pd.name.toUpperCase();
    console.log(pd, index, productsArray);
    return upperCase;

} );
console.log(productNames);

