const king= {name: 'alok', age : 25, village: 'Rajshahi'};
Object.freeze(king); //freeze no add and no change
Object.seal(king);  //seal no add no change only value change
king.name = "Alok"+
delete king.age; //delete
king.town = "Mohadevpur" //add
console.log(king);