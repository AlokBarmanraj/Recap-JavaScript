const number = [11,12,13,14,15,16,17];
const evenNumber = number.filter (num => num % 2 === 0);
console.log(evenNumber);



const friends = ['nabib',"tomal", 'jamal', 'nasid', 'akamal', 'nasib'];
const nFriend = friends.filter( frd => frd[0]==="n");
console.log(nFriend);



const friendNu = [
    {name:'tomal', age: 32},
    {name:'komal', age: 42},
    {name:'nomal', age: 22},
    {name:'taomal', age: 20},
    {name:'jomal', age: 21},
    {name:'nomal', age: 42},
    {name:'tkomal', age: 25}
]
const friendOver = friendNu.filter(frd => frd.age > 30);
console.log(friendOver);