$(document).ready(function () {
  var $window = $(window)

  //Preloader
  // $window.on('load', function () { // makes sure the whole site is loaded
  //   $('#status').fadeOut(); // will first fade out the loading animation
  //   $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  //   $('body').delay(350).css({ 'overflow': 'visible' });
  // })
  

  function replaceFlage () {
    const ending = document.hostname ? document.hostname.replace('testless.', '').replace('www.', '') : 'io' || 'io';
    var $box = document.getElementById('lang-select-navbar')
    var $box2 = document.getElementById('lang-select-navbar-clone')
    var $iconMobile = document.getElementById('icon-navbar')
    var $iconMobile2 = document.getElementById('icon-navbar-clone')
    var $img = document.querySelector('#lang-select-'+ ending + ' img')
    $box.innerHTML = $img.outerHTML
    $box2.innerHTML = $img.outerHTML
    $iconMobile.innerHTML = $img.outerHTML
    $iconMobile2.innerHTML = $img.outerHTML
  }

  replaceFlage()



  var $navbarBurger = $('.navbar-burger')
  var $navbarClone = $('#navbar-clone')
  var $backToTop = $("#backtotop")

  //Mobile menu toggle
  if ($navbarBurger.length) {
    $navbarBurger.on("click", function () {
      var menu_id = $(this).attr('data-target');
      $(this).toggleClass('is-active');
      $("#" + menu_id).toggleClass('is-active');
      $('.navbar.is-light').toggleClass('is-dark-mobile')
    });
  }

  //Navbar Clone
  if ($navbarClone.length) {
    $window.scroll(function () {    // this will work when your window scrolled.
      var height = $window.scrollTop();  //getting the scrolling height of window
      if (height > 50) {
        $navbarClone.addClass('is-active');
      } else {
        $navbarClone.removeClass('is-active');
      }
    });
  }

  //Init feather icons
  feather.replace();

  //reveal elements on scroll so animations trigger the right way
  var win_height_padded = $window.height() * 1.1,
    isTouch = Modernizr.touch;

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop();
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this = $(this),
        offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function () {
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'), 10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
  }

  // Back to Top button behaviour
  var pxShow = 600;
  var scrollSpeed = 500;
  $window.scroll(function () {
    if ($window.scrollTop() >= pxShow) {
      $backToTop.addClass('visible');
    } else {
      $backToTop.removeClass('visible');
    }
  });
  $backToTop.find('a').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
    return false;
  });



  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 550, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
})