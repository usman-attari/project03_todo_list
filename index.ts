import { Console } from "console";
import inquirer from "inquirer";
import { todo } from "node:test";

let todos : string[] = [];
let Loop = true;

while (Loop) {
    const answere:{
        TODO: string,
        addmore: boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: " addmore",
            message : "Do you want toadd more todo? ",
            default: false
                
        
        }
    ])
        const { TODO,addmore} = answere;
        console.log(answere)
        
        Loop= addmore
        if (TODO) {
            todos.push(TODO)
        } else {
            console.log (" kindly add valid input")
        }
}
if (todo.length > 0) {
    console.log ("Your Todo List; \n")
    todos.forEach(todo=>{
        console.log(todo)
    });
} else {
    console.log(" No todos Found")
}
// console.log(todos )