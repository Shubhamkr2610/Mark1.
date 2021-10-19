var readlineSync = require("readline-sync");

var score = 0;

//input>>processing>>output
var userName = readlineSync.question("Hello Buddy! what's your name?\n ");

console.log("HEY! Welcome "+ userName +  " let's check how  well you know me?");


//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) { //branching 
  console.log("right!");
  score = score + 1;
} else {
  console.log("wrong!");
  score = score - 1;

}

console.log("current score: ", score);
console.log("-------------")
}


//array of objects
var questions= [{
  question: "Where do I live?(sonpur/patna)\n ",
  answer: "sonpur"

},{
  question: "what is my hobby?(dancing/listening music)\n ",
  answer: "listening music"

},{
  question:"Do I know web development?(yes/no)\n",
  answer:"no"
},{
  question:"introvert, extrovert or ambivert?\n",
  answer:"extrovert"
},{
  question: "which is My favorite cricketer?(dhoni/virat) \n",
  answer: "dhoni"
}];

//loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);
