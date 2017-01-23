// $('#nav').affix({
//       offset: {
//         top: $(window).height(),
//       },
//     });

// /* activate sidebar */
// $('#sidebar').affix({
//   offset: {
//     top: 235
//   }
// });
//
// /* activate scrollspy menu */
// var $body   = $(document.body);
// var navHeight = $('.navbar').outerHeight(true) + 10;
//
// $body.scrollspy({
// 	target: '#leftCol',
// 	offset: navHeight
// });
//
// /* smooth scrolling sections */
// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top - 50
//         }, 1000);
//         return false;
//       }
//     }
// });

$(document).ready(function () {
  $('#booklist').click(function () {
    console.log($(this).html());
    $(this).text($(this).text() == 'View Booklist' ? 'Hide Booklist' : 'View Booklist');
  });
});

// Add smooth scrolling on all links inside the navbar
$('#navbar a, #firstpageintro, #backtotop, #checkmywork').on('click', function (event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== '') {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top,
    }, 1000, function () {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});
