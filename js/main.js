$(document).ready(function () {
  // *************** Add smooth scrolling on all links inside the navbar ***************
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

  // ***************  Scroll & Show ***************
  $('.faded').each(function (i) {
    $(this).css('opacity', '0');
  });
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
      var windowHeight = $(window).height();
      /* Check the location of each desired element */
      $('.faded').each(function (i) {

        // var bottomOfObject = $(this).offset().top + $(this).outerHeight();
        var bottomOfObject = $(this).offset().top + windowHeight / 3;
        var bottomOfWindow = $(window).scrollTop() + windowHeight;

        /* If the object is completely visible in the window, fade it it */
        if (bottomOfWindow > bottomOfObject) {
          $(this).animate({ 'opacity': '1' }, 800);

          // $(this).addClass('scroll-show');
        }
      });
    });

  // ***************  portfolio sorting tags ***************
  $('#portfolio-filter').on('click', 'li', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var filterGroup = $(this).attr('data-group');
    $('.portfolio-item').slideUp();
    if (filterGroup != 'all') {
      $('.portfolio-item').each(function (index, item) {
        if ($(this).attr('data-groups').indexOf(filterGroup) > -1) {
          $(this).slideDown('slow');
        }
      });
    } else {
      $('.portfolio-item').slideDown('slow');
    }
  });

  $('#books-filter').on('click', 'li', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var filterGroup = $(this).attr('data-group');
    $('.book-item').hide();
    if (filterGroup != 'all') {
      $('.book-item').each(function (index, item) {
        if ($(this).attr('data-groups').indexOf(filterGroup) > -1) {
          $(this).slideDown(1000);
        }
      });
    } else {
      $('.book-item').slideDown(1000);
    }
  });

  // ***************  collapseBooklist  ***************
  $('#booklist').click(function () {
    $('#collapseBooklist').slideToggle(1500);
    $(this).text($(this).text() == 'View My Booklist' ? 'Hide My Booklist' : 'View My Booklist');
  });
});
