//$('li').on('mouseover', function() {
//  $('li').addClass('highlight');
//});
//highlights all li

//$('li').on('mouseleave', function() {
//  $('li').removeClass('highlight');
//});

//
// $('li').on('mouseover', function(event) {
//   var target = event.target;
//   $(target).addClass('highlight');
// });
//
// $('li').on('mouseleave', function() {
//   var target = event.target;
//   $(target).removeClass('highlight');
// });

//two ways to do the same thing, above and beloew code

$('li').on('mouseover', function() {
 $(this).addClass('highlight');
});

$('li').on('mouseleave', function() {
 $(this).removeClass('highlight');
});

$('img').on('click', function() {
  $('img').hide();
  $('.hidden').show();
})

$('.hidden').on('click', function() {
  $('img').show();
  $('.hidden').hide();
})
