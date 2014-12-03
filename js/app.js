
var question1 = {
  questionText : "What percentage of the earth's water is fresh water?",
  answerA : "7%",
  answerB : "12%",
  answerC : "9%", 
  answerD : "3%",
}

var question2 = {
  questionText: "At 1 drip per second, approximately how much water does a faucet leak per year?",
  answerA : "160 gallons",
  answerB : "3000 gallons",
  answerC : "225 gallons",
  answerD : "1500 gallons",
}
var question3 = {
  questionText: "On average, what percentage of the human body is made of water?",
  answerA : "75%",
  answerB : "87%",
  answerC : "60%",
  answerD : "55%",
}

var question4 = {
  questionText: "The Average American uses how many gallons of water per day?",
  answerA : "99 gallons",
  answerB : "44 gallons",
  answerC : "72 gallons",
  answerD : "125 gallons",
}

var question5 = {
  questionText: "The oceans hold what percentage of the earth's water?",
  answerA : "96.5%",
  answerB : "84.7%",
  answerC : "65.2%",
  answerD : "86%",
}

var questionArray = [question1, question2, question3, question4, question5];
var correctAnswerArray = [question1.answerA, question2.answerB, question3.answerC, question4.answerA, question5.answerA];
var userAnswerArray = [];
var questionNum = 0;
var userScore = 0;


var questionElement = document.getElementById('questionText');
var answerEl1 = document.getElementById('a1');
var answerEl2 = document.getElementById('a2');
var answerEl3 = document.getElementById('a3');
var answerEl4 = document.getElementById('a4');


var checkAnswer = function (userAnswer) {
  if (userAnswer == correctAnswerArray[questionNum]) {
     userScore++;
     console.log("userscore", userScore);
     console.log(correctAnswerArray);
}
   questionNum++;
   nextQuestion();
 }

var nextQuestion = function () {  
  questionElement.innerHTML = questionArray[questionNum].questionText;
   answerEl1.innerHTML = questionArray[questionNum].answerA;
   answerEl2.innerHTML = questionArray[questionNum].answerB;
   answerEl3.innerHTML = questionArray[questionNum].answerC;
   answerEl4.innerHTML = questionArray[questionNum].answerD;
    var answerElements = [answerEl1, answerEl2, answerEl3, answerEl4];
    var answerElementsLength = answerElements.length;
  };

  document.getElementById('questionArea').addEventListener('click', function(e) {
        console.log(e.toElement.innerHTML);
        var userAnswer = e.toElement.innerHTML;
        userAnswerArray.push(userAnswer);
        console.log(userAnswerArray);
        checkAnswer(userAnswer);
}, false);


//starts quiz after button is clicked//
document.getElementById('btn').addEventListener("click", function(){
  document.getElementById('btn').remove();
  nextQuestion();
});







