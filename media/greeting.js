var name = prompt('Hiya! What is your name?');
var output = document.querySelector('#greeting');

output.innerHTML = "<p>Thanks for visiting, " + name + ".</p>";

var btn = document.querySelector('#userButton');

var richardFood = "sushi";
var simoneFood = "Pho";
var genaFood = "pasta";

var myFoodArray = ["Tacos", "Burriotos", richardFood, "curry", simoneFood, genaFood];

var classCity =
{
  "gena": "Ashland", "rebecca": "Memphis", "wayne": "Manchester", "richard": "Galveston", "simone": "Louisville"
}

//Access your city and display it in <p></p> inside a div with the id “myCity” on your media page.
