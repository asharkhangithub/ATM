#! /usr/bin/env node
import inquirer from "inquirer"

let mypin = 1234;
let balance = 100000 ;

const answer = await inquirer.prompt([
    {message: "Enter your pin ", type: "number", name:"pin"},
]);

if(answer.pin === mypin){
   console.log("correct pin code !")
    
  let operationans =await inquirer.prompt([
    {message: "please select option ", type: "list", name:"operation" , choices:['withdraw' ,'check balance']},
]);
if(operationans.operation === "withdraw"){
    let amountans = await inquirer.prompt([
        {message: "enter your amount ", type: "number", name:"amount" },
    ]);
    balance -= amountans.amount ;
    console.log("your remaining balance is :" + balance)
}else if(operationans.operation === "check balance"){
    console.log("your baalance is :" + balance)
}


}else{
    console.log("incorrect pin number !")
}
