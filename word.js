import inquirer from "inquirer";
//declare a constant "answer" and assign it the result of inquirer.promt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence TO Count The Words:"
    }
]);
const words = answer.sentence.trim().split(" ");
//print the array of words
console.log(words);
//print the words count of the sentence
console.log(`Your Sentence Word Count is ${words.length}`);
