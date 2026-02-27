function add (num1, num2){
    console.log("Arguments:", arguments);
    const args = [...arguments];
    console.log("args:", args);
    return num1+num2
}
add(1,5,29,78,64,9869,66,);