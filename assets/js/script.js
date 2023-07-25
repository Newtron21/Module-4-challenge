var highScore = document.querySelector(".highScore");
var answerButtons = document.querySelector(".answerButtons");
var questionTitle = document.querySelector(".questionTitle");
var rightWrongAnswer = document.querySelector(".rightWrongAnswer");
var moreInfo=document.querySelector(".moreInfo");
var groupInfo=document.querySelector(".groupInfo");
var score= 1;
var timeLeft = 75;
var highScoreEnd=document.querySelector(".highScoreEnd");
var restart=document.querySelector(".restart");
var clearScores=document.querySelector(".clearScores");


//view high scores can be clicked

  
  //building out the questions --java script to insert elements
  // WHEN I answer a question incorrectly
  // THEN time is subtracted from the clock
  // WHEN all questions are answered or the timer reaches 0
  // THEN the game is over
  // WHEN the game is over
  // THEN I can save my initials and score
//I pasted this code in from  our module 4 timer 
// GIVEN I am taking a code quiz
  // WHEN I click the start button
  // THEN a timer starts and I am presented with a question
var timerEl = document.getElementById('timer');
var generateBtn = document.querySelector("#start");

var timer;

// WHEN I answer a question
  // THEN I am presented with another question
generateBtn.addEventListener("click", startQuiz);

 // generateBtn.addEventListener("click", countdown);
  //NEED TO TAG ID OF START BUTTON AND UPON CLICK Execute timer and move to next question
  function countdown() {
    // Sets timer
    timer = setInterval(function() {
      timerEl.textContent = 'Timer: '+ timeLeft ;
      timeLeft--;
      console.log(timeLeft)
      if (timeLeft <= 0) {
        // Tests if win condition is met
        //if (endScore && timeLeft > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          
        //}
      }
      // Tests if time has run out
      if (timeLeft === 0) {
        // Clears interval
        clearInterval(timer);
        endScore();
      }
    }, 1000);
  }

  function startQuiz(event){
    event.stopPropagation();
    //adding all buttons and changing class from original start button
    answerButtons.children[0].setAttribute("class", "hide");
    var btnOne = document.createElement("button");
    var btnTwo = document.createElement("button");
    var btnThree = document.createElement("button");
    var btnFour = document.createElement("button");
    countdown();
    //appending them to answerbuttons and setting classes and IDs
    answerButtons.appendChild(btnOne);
    answerButtons.appendChild(btnTwo);
    answerButtons.appendChild(btnThree);
    answerButtons.appendChild(btnFour);
    answerButtons.children[1].setAttribute("class", "btn btn-a");
    answerButtons.children[2].setAttribute("class", "btn btn-a");
    answerButtons.children[3].setAttribute("class", "btn btn-a");
    answerButtons.children[4].setAttribute("class", "btn btn-a");
    answerButtons.children[1].setAttribute("id", "answerOne");
    answerButtons.children[2].setAttribute("id", "answerTwo");
    answerButtons.children[3].setAttribute("id", "answerThree");
    answerButtons.children[4].setAttribute("id", "answerFour");
//changing the wording for the question
    btnOne.textContent="1. Strings";
    btnTwo.textContent="2. Booleans";
    btnThree.textContent="3. Alerts";
    btnFour.textContent="4. Numbers";
    questionTitle.textContent="Commonly used data types DO not include:";
    moreInfo.textContent="";
    // var nextQuestionTwo = document.querySelector("#qOne");
//logic on which is right and wrong answer.
//if answer=clicked move to next function and write correct
//if else=clicked move to next function, write wrong and subtract 10 seconds from timer
    //if any button is clicked then go to next question 
    //if wrong button clicked write "wrong" on right wrong answer and subtract 10 seconds from timer
btnThree.onclick=function(){rightWrongAnswer.textContent="Correct"; score++; questionTwo()};
//add point to score
btnOne.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10; questionTwo()};
btnFour.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10; questionTwo()};
btnTwo.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10; questionTwo()};
console.log("1. You answered " +rightWrongAnswer);
// nextQuestionTwo.addEventListener("click", questionTwo);

  }
function questionTwo(){
  var btnOne = document.querySelector("#answerOne");
  var btnTwo =document.querySelector("#answerTwo");
  var btnThree = document.querySelector("#answerThree");
  var btnFour =document.querySelector("#answerFour");
  // answerButtons.children[0].setAttribute("class", "btn qTwo");
  // answerButtons.children[1].setAttribute("class", "btn qTwo");
  // answerButtons.children[2].setAttribute("class", "btn qTwo");
  // answerButtons.children[3].setAttribute("class", "btn qTwo");
  btnOne.textContent="1. Quotes";
  btnTwo.textContent="2. Curly brackets";
  btnThree.textContent="3. Parenthesis";
  btnFour.textContent="4. Square brackets";
  questionTitle.textContent="The condition in an if/else statement is enclosed with ___.";
  moreInfo.textContent="";

  btnThree.onclick=function(){
    rightWrongAnswer.textContent="Correct";
    score++; 
    questionThree()};
  btnOne.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionThree()};
  btnFour.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionThree()};
  btnTwo.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionThree()};
  console.log("2. You answered " +rightWrongAnswer);
}

function questionThree(){
  var btnOne = document.querySelector("#answerOne");
  var btnTwo =document.querySelector("#answerTwo");
  var btnThree = document.querySelector("#answerThree");
  var btnFour =document.querySelector("#answerFour");
  btnOne.textContent="1. Numbers and strings";
  btnTwo.textContent="2. Other arrays";
  btnThree.textContent="3. Booleans";
  btnFour.textContent="4. All off the above";
  questionTitle.textContent="Arrays in javaScript can be used to store ____.";


  btnFour.onclick=function(){rightWrongAnswer.textContent="Correct"; score++; questionFour()};
  btnOne.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionFour()};
  btnThree.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionFour()};
  btnTwo.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionFour()};
  console.log("3. You answered " +rightWrongAnswer);

}

function questionFour(){
  var btnOne = document.querySelector("#answerOne");
  var btnTwo =document.querySelector("#answerTwo");
  var btnThree = document.querySelector("#answerThree");
  var btnFour =document.querySelector("#answerFour");
  btnOne.textContent="1. Commas";
  btnTwo.textContent="2. Curly brackets";
  btnThree.textContent="3. Quotes";
  btnFour.textContent="4. Parenthesis";
  questionTitle.textContent="String values must be enclosed within ____ when being assigned to variables.";


  btnThree.onclick=function(){rightWrongAnswer.textContent="Correct"; questionFive()};
  btnOne.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionFive()};
  btnFour.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionFive()};
  btnTwo.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;questionFive()};
  console.log("4. You answered " +rightWrongAnswer);
}

function questionFive(){
  var btnOne = document.querySelector("#answerOne");
  var btnTwo =document.querySelector("#answerTwo");
  var btnThree = document.querySelector("#answerThree");
  var btnFour =document.querySelector("#answerFour");
  btnOne.textContent="1. Javascript";
  btnTwo.textContent="2. Terminal/bash";
  btnThree.textContent="3. For loops";
  btnFour.textContent="4. console.log";
  questionTitle.textContent="A very useful tool used during development and debugging for printing content to the debugger is:";


  btnFour.onclick=function(){rightWrongAnswer.textContent="Correct"; endScore()};
  btnOne.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;endScore()};
  btnThree.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;endScore()};
  btnTwo.onclick=function(){rightWrongAnswer.textContent="Wrong!";timeLeft-=10;endScore()};
  console.log("5. You answered " +rightWrongAnswer);

}
function endScore(){
  //hide other elements
  clearInterval(timer)
  answerButtons.setAttribute("class", "hide");
  //create new elements for headings, text, a text box and submit button
  questionTitle.textContent="All Done!";
  
  moreInfo.textContent=("Your final score is "+ timeLeft +".");
  var groupingBoxSubmit =document.createElement("div");
  var evenMoreInfo = document.createElement("h4");
  var buttonSubmit=document.createElement("button");
  var infoBox=document.createElement("form");
  var infoBoxLabel=document.createElement("label");
  var infoBoxInput=document.createElement("input");

  //setting text for elements
  evenMoreInfo.textContent= "Enter initials:";
  buttonSubmit.textContent="Submit";
  infoBoxInput.textContent="initials";
//setting parent and child relationships
 
  groupInfo.appendChild(evenMoreInfo); 
  groupInfo.appendChild(infoBox);
  groupInfo.appendChild(buttonSubmit);
  infoBox.appendChild(infoBoxLabel); 
  infoBox.appendChild(infoBoxInput);

  //setting attributes

  // groupingBoxSubmit.setAttribute("class", "d-flex flex-row")
  infoBox.setAttribute("id", "initials-form")
  infoBox.setAttribute("method", "POST")
  buttonSubmit.setAttribute("id", "submit");
  buttonSubmit.setAttribute("class","btn");
  infoBoxLabel.setAttribute("for", "initials");
  infoBoxInput.setAttribute("type", "text");
  infoBoxInput.setAttribute("placeholder", "type initials here");
  buttonSubmit.setAttribute("text", "Submit");
  infoBoxInput.setAttribute("id", "initials");
  infoBoxInput.setAttribute("name", "initials");

//making sure these are rendering correctly
  console.log (buttonSubmit);
  console.log(groupingBoxSubmit);

  
  console.log("infobox is " +infoBox)

  var initials=document.getElementById("initials");

 
 //need to add button and have it move to next function and store score and name
    //need to figure out how to stop timer upon execution of endscore function
  
    
    
    //input your name
    //shows score
    //saves score
    //makes a list of all people who've done it
    //access list by selecting "see high score"

  
  

buttonSubmit.addEventListener ("click",function(event){
  //store information from msg in new variable;
       event.preventDefault();
        // Save related form data as an object
        
        var finalScore = {
          timeLeft: timeLeft,
          initials: initials.value.trim()
        };
        // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
        var lastScore = JSON.parse(localStorage.getItem("finalScore")) || [];
        lastScore.push(finalScore)
        localStorage.setItem("finalScore", JSON.stringify(lastScore));
        highScoreFinal();
      
      console.log(finalScore);})}

      function highScoreFinal() {
          var lastScore = JSON.parse(localStorage.getItem("finalScore")) || [];
          // if (lastScore !== null) {
          //   document.querySelector("#initials").textContent = ". " +lastScore.initials+ "-"+lastScore.scoreNow  
          //  //for loop
          // }
          var scoreList =""
          for(let i=0; i<lastScore.length;i++){
            scoreList += "<li>"+(i+1)+". " +lastScore[i].initials+ "-"+lastScore[i].timeLeft  +"</li>"
          }
          document.querySelector(".showScores").innerHTML=scoreList;
          
          generateBtn.setAttribute("class", "hide");
          questionTitle.textContent="High Scores";
          groupInfo.setAttribute("class", "hide");
          moreInfo.setAttribute("class", "hide");
          rightWrongAnswer.setAttribute("class", "hide");
          highScoreEnd.setAttribute("class", "highScoreEnd");

          // buttonSubmit.addEventListener ("click",function(event){
          
          console.log("restart info is " +restart);
          restart.addEventListener ("click", function(event){
            event.preventDefault();
            window.location.reload()
          }
          );
          clearScores.addEventListener ("click", function(event){
            event.preventDefault();
            localStorage.clear();
            window.location.reload();
          }
          )
          // 




        }
      
    
    
      highScore.addEventListener ("click", function(event){
        event.preventDefault();
        highScoreFinal();

        
      }
      )
   
  
    
  

  