import inquirer from "inquirer";

let correctAnswers = 0;
const totalQuestions = 5;

let quiz = await inquirer.prompt 
(
    [
        {
            name : "quiz",
            message : "CLICK ON TYPESCRIPT TO START THE QUIZ ",
            type : "list",
            choices :[
                "typescript"
            ]
        }
    ]
)
 
if (quiz.quiz === "typescript"){
    let tsquiz = await inquirer.prompt
(
  [
     {
        name : "ts",
        message : "Question 1.: What is TypeScript",
        type : "list",
        choices : [
   "A) A database management system",
   "B) A statically typed superset of JavaScript",
   "C) A CSS framework",
   "D) A version control system"
                  ]
     }
  ]
)
    
if (tsquiz.ts === "B) A statically typed superset of JavaScript")
    {
        console.log ("CORRECT ANSWER ")
        correctAnswers++
    }
else 
    {
        console.log(" INCORRECT ANSWER : CORRECT ANSWER IS : OPTION B "+" "+" A statically typed superset of JavaScript")
    }

    let qnotwo = await inquirer.prompt
(
  [
    {
         name : "ts",
         message : "Question 2.: Which company developed TypeScript?",
         type : "list",
        choices : [
                     "A) Google",
                     "B) Facebook",
                     "C) Microsoft",
                     "D) Apple"
                  ]
    }
  ]
);
      
if (qnotwo.ts === "C) Microsoft")
    {
        console.log("CORRECT ANSWER")
        correctAnswers++
    }
else {
    console.log ("INCORRECT ANSWER : CORRECT ANSWER IS : OPTION C "+" "+ "Microsoft")
     }

    let qnothree = await inquirer.prompt
(
 [
   {
        name : "ts",
        message : "Question 3.: Which command is used to compile a TypeScript file?",
        type : "list",
        choices : [
                     "A) ts compile",
                     "B) typescript compile",
                     "C) tsc",
                      "D) ts build"
                ]
   }
 ]
)
    
if (qnothree.ts === "C) tsc") 
    {
        console.log ("CORRECT ANSWER")
        correctAnswers++
    }
else {
        console.log("INCORRECT ANSWER : CORRECT ANSWER IS : OPTION C"+" "+"tsc")
     }

    let qnofour = await inquirer.prompt
(
  [
    {
        name : "ts",
        message : "Question 4.: How do you define a variable in TypeScript with a specific type?",
        type : "list",
        choices : [
                      "A) var variableName: type;",
                      "B) let variableName = type;",
                      "C) let variableName: type;",
                      "D) var variableName = type;"
                ]
    }
  ]
)
   
if (qnofour.ts === "C) let variableName: type;") 
    {
        console.log ("CORRECT ANSWER")
        correctAnswers++
    }
else {
        console.log("INCORRECT ANSWER : CORRECT ANSWER IS : OPTION C"+" "+"let variableName = type")
    }

    let qnofive = await inquirer.prompt
(
  [
    {
    name : "ts",
    message : "Question: What file is used to configure the TypeScript compiler options for a project?",
    type : "list",
    choices : [
                    "A) package.json",
                    "B) tsconfig.json",
                    "C) typescript.json",
                    "D) config.ts"
                ]
    
    }
  ]
)

if (qnofive.ts === "C) typescript.json") 
    {
        console.log ("CORRECT ANSWER")
        correctAnswers++
    }
else {
        console.log("INCORRECT ANSWER  : CORRECT ANSWER IS : OPTION C"+" "+"typescript.json")
    }

    let result = await inquirer.prompt
    (
        [
            {
                name : "result",
                type : "list",
                message : "CLICK ON RESULT TO SEE ",
                choices : [
                    "result"
                ]
            }
        ]
    )
    let percentage = (correctAnswers / totalQuestions) * 100;
  console.log(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`);
  console.log(`Your score is ${percentage}%.`);
}


// --------------------------------------------------------------------- 


