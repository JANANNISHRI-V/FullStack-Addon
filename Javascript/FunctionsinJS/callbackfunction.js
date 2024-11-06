// function display(result){
//     console.log(result);
// }

// function calculation(num1,num2,callback){
//     let total =num1+num2;
//     callback(total);
// }
// calculation(10,20,display)



function add(num1,num2){
    let result= num1+num2;
    console.log(result);
}

function sub(num1,num2){
    let result= num1-num2;
    console.log(result);
}

function mul(num1,num2){
    let result= num1*num2;
    console.log(result);
}

function div(num1,num2){
    let result= num1/num2;
    console.log(result);
}

function calculation(num1,num2,callback){
    callback(num1,num2);
}
calculation(10,20,add)
