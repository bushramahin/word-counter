import inquirer from "inquirer";
let para = [
    {
        name : "Paragraph",
        type : "input",
        message : "Enter Paragraph"
    }
]

let {Paragraph} = await inquirer.prompt(para)
if(Paragraph){
    let characters = Paragraph.split(/\s+/g)
    console.log("Characters" , characters.length);
    
    let count = Paragraph.replaceAll(/\s+/g,'');
    console.log("Words",count.length);
    
}