const friends = [
    {name:'tomal', age: 32},
    {name:'komal', age: 42},
    {name:'nomal', age: 22},
    {name:'taomal', age: 20},
    {name:'jomal', age: 21},
    {name:'nomal', age: 42},
    {name:'tkomal', age: 25}
]
const friendName = friends.find(frd => frd.name === "tomal");
const friendNameT = friends.find(frd => frd.name[0] === "t");

console.log(friendNameT);