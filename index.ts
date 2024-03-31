#! /usr/bin/env node
console.log ("Well come to ATM");

import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

let myName ="Quratulain";
let myBalance =10000;
let mypin=1981;

let myAnswer = await inquirer.prompt([
    

   {  
     name: "userName",
    type : "string",
    messsage: "Enter youe user name",
   }
 ]);

  if(myAnswer.userName === myName){
    console.log ("Correct user name");
  }

  else {
        console.log ("Enter your right user name");
    }
  let PinAnswer=await inquirer.prompt([
   {
      name: "userPin",
      type: "number",
      message:"Enter your pin number",
    }
  ]);
  if (PinAnswer.userPin===mypin){
     console.log("Correct pin number")

  let OperationAns=await inquirer.prompt([
    {
       name: "operation",
       type: "list",
       message:"Please select option",
       choices: ["withdraw","checkBalance"],

   }
  ])

  if (OperationAns.operation==="withdraw"){

  let AnsMethod= await inquirer.prompt([
    {
       name: "method",
       type :"list",
       message:"choose your method",
       choices: ["fastcash","enter amount"],

    }
  ]);

  if (AnsMethod.method ==="fastcash"){
  let entAmount=await inquirer.prompt([

   {
      name: "amount",
      type: "list",
      message:"select your amount",
      choices:[1000,2000,5000,10000,20000],
      
   }

    ]);
  if (entAmount.amount>myBalance) {
    console.log("Insufficent Balance");
  }

  else{
    myBalance-=entAmount.amount
    console.log(`${entAmount.amount} withdraw successfully`);
    console.log(`your remaining balance is ${myBalance}`);
  }
  }
  else if (AnsMethod.method ==="enter amount"){
    
  let amountAns=await inquirer.prompt([
    {
      name: "amount",
      type:"number",
      message: "Enter your amount: ",

    }
  ]);

  if (amountAns.amount > myBalance){
    console.log("Insufficent Balance");
  }

  else  {
     myBalance-=amountAns.amount;
     console.log(`${amountAns.amount} withdraw succsessfully`);
     console.log(`your remaining balance ${myBalance}`);

        }
        }
   } else if( OperationAns.operation ==="checkBalance"){
    console.log (`your current balance is ${myBalance}`);
  
   }
} else {
      console.log("your pin number is incorrect try again");
}



