
$( document ).ready(function() {
	$('#end').hide();
	$('#question').hide();


function Question(prompt, first, second, third, fourth) {
   this.prompt = prompt;
   this.answerA = first;
   this.answerB = second;
   this.answerC = third;
   this.answerD = fourth;
	this.addToQuiz = function() {
	 		return "<h1>" + this.prompt + "</h1><ol><li>" + this.answerA  + "</li><li>" + this.answerB  + "</li><li>" + this.answerC  + "</li><li>" + this.answerD  + "</li></ol>";
};

$('button').click(function (question1){
		$('#btn').hide();

var question1 = {
	prompt : "What percentage of the earth's water is fresh water?",
	answerA : "7%",
	answerB : "12%",
	answerC : "9%",	
	answerD : "3%"
}

var question2 = {
	prompt : "At 1 drip per second, approximately how much water does a faucet leak per year?</h1>",
	answerA : "160 gallons",
	answerB : "3000 gallons",
	answerC : "225 gallons",
	answerD : "1500 gallons"
}
var question3 = {
	prompt : "On average, what percentage of the human body is made of water?</h1>",
	answerA : "75%",
	answerB : "87%",
	answerC : "60%",
	answerD : "55%"
}

var question4 = {
	prompt : "The Average American uses how many gallons of water per day?</h1>",
	answerA : "99 gallons",
	answerB : "44 gallons",
	answerC : "72 gallons",
	answerD : "125 gallons"
}

var question5 = {
	prompt : "The oceans hold what percentage of the earth's water?",
	answerA : "96.5%",
	answerB : "84.7%",
	answerC : "65.2%",
	answerD : "86%"
}


//question array to loop through question objects 

var questionArray = [question1, question2, question3, question4, question5];
for	(i = 0; i < questionArray.length; i++) {
  text += questionArray[i];

 console.log('Ready');

};
});
};
});




