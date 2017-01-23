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
    // $('.scroll-show').each(function (i) {
    //   $(this).css('opacity', '0');
    // });
    //
    // /* Every time the window is scrolled ... */
    // $(window).scroll(function () {
    //     /* Check the location of each desired element */
    //     $('.scroll-show').each(function (i) {
    //
    //       // var bottomOfObject = $(this).offset().top + $(this).outerHeight();
    //       var bottomOfObject = $(this).offset().top + $(this).outerHeight() / 3;
    //       var bottomOfWindow = $(window).scrollTop() + $(window).height();
    //
    //       /* If the object is completely visible in the window, fade it it */
    //       if (bottomOfWindow > bottomOfObject) {
    //         $(this).animate({ 'opacity': '1' }, 800);
    //       }
    //     });
    //   });

    $('#booklist').click(function () {
      $('#collapseBooklist').slideToggle(1500);

      // console.log($(this).html());
      $(this).text($(this).text() == 'View My Booklist' ? 'Hide My Booklist' : 'View My Booklist');
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
