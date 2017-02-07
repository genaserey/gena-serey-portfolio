
//example 1
//var n = 0;

//console.log("Start the count.");

//while (n < 10){
//  console.log(n, "This is a counter.")
//  n++
//}
//console.log("fin!")

//exercise 1
//create a while loop that logs numbers 1 thru 10 to the console

//var n = 1;

//console.log("Start the count.");

//while (n <= 10){
//  console.log(n, "This is a counter.")
//  n++
//}
//console.log("fin!")

//exercise 2
//create a while loop that logs every even number 2 thru 20 to the console
//var n = 2
//console.log("Even numbers");

//while (n <= 20){
//  console.log(n);
//  n += 2

//}
//console.log("fin!")


//exercise 3
//create a while loop that console.logs a running total of the cumulative sum
//of numbers from 1 to n

//var i = 1;
//starting value for the counter is 1
//we want this change within our loop

//var n = 50;
//variable that wont change thruout loop

//var sum = 0;
//the value we want to track and log

  //the condition we are checking to see if true
  //is our counter less then 50
//while (i<n) {
  //every time we go thru loop, we add the value of our counter to the value
  //of sum
//  sum = sum + i;
  //console.log the new value of sum
  //console.log(sum);
  //incriment the counter by 1
//  i = i + 1
//}

//exercise 4
// in your html doc, create a seperate div for each exercise. Then, in
//addition to console.log-ing each iteration, append all of the results
//to their respective divs using an unorderered list

var n = 1;
var outputTarget = document.querySelector("#exercise-1")
var outputHtml = "<ul>";

while (n <= 10) {
  console.log(n);
  outputHtml += "<li>" + n + "</li>";
  n++;
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;


//exercise 2 in a div
var i = 2
var targetTwo = document.querySelector("#exercise-2");
var outputTwo = "<ul>"

while (i <= 20){
  console.log(i);
  outputTwo += "<li>" + i + "</li>";
  i += 2
}
outputTwo += "</ul>";
targetTwo.innerHTML = outputTwo;

//exercise 3 in a div
var x = 1;
var y = 50;
var sum = 0;
var targetThree = document.querySelector("#exercise-3");
var outputThree = "<ul"

while (x < y) {
 sum += x;
  console.log(sum);
  outputThree += "<li>" + sum + "</li>"
  x++;
}

outputThree += "</ul>";
targetThree.innerHTML = outputThree;

//exercise 5
//count down from 15 by ones, for each number, log "even" or "odd"
//to the console and to a new div
var c = 15;
var targetFive = document.querySelector("#exercise-5");
var outputFive = "<ul>";

while(c > 0) {
  console.log(c);
  if(c % 2 === 0) {
    outputFive += "<li>even</li>"
  } else {
    outputFive += "<li>odd</li>"
  }
  c--;
}
outputFive += "</ul>";
targetFive.innerHTML = outputFive;
