$("body").prepend('<div id="everything"></div>');
$("#everything").append('<h1>A heading!</h1>');
$("#everything").append('<p>Here is some text!</p>');
$("#everything").append('<p>Here is a second set of text</p>');
$("#everything").append('<div class="holder"></div>');
$(".holder").append('<ul><li>List Item 1</li><li>LIst Item 2</li><li>List Item 3</li></ul>');
$(".holder").append('<ol><li>List Item 4</li><li>List Item 5</li><li>List Item 6</li></ol>');
$("#everything").append('<div id="change me">This part needs to change!</div>');
$("#everything").append('<div id="secret">We should hide this</div>');
