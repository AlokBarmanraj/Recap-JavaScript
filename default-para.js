function defaultPara1 (num1, num2){
    const total = num1 + num2;
    console.log(num1, num2, "total:", total);
}
defaultPara1 (10, 30);



// default Para no use

function defaultPara2 (num1, num2){
    const total = num1 + num2;
    console.log(num1, num2, "total:", total);
}
defaultPara2 (10);


// default Para use

function defaultPara3 (num1, num2 = 0){
    const total = num1 + num2;
    console.log(num1, num2, "total:", total);
}
defaultPara3 (10);
