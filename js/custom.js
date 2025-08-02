
  $(function () {

    // MENU
    $('.nav-link').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $('.smoothScroll').on('click', function(event) {      
      event.preventDefault();
      var $anchor = $(this);
      var targetOffset = $($anchor.attr('href')).offset().top;
      $('html, body').stop().animate({
          scrollTop: targetOffset - 75
      }, 1000);
    });

    // Navbar link click color flash
    $('.navbar-nav .nav-link').on('click', function() {
      var clickedLink = $(this);

      clickedLink.addClass('nav-link-clicked');

      setTimeout(function() {
        clickedLink.removeClass('nav-link-clicked');
      }, 400); // The color will revert after 400 milliseconds
    });

    // Hero text link click color flash
    $('.hero .text').on('click', function(e) {
      e.preventDefault();
      var clickedLink = $(this);

      clickedLink.addClass('text-clicked');

      setTimeout(function() {
        clickedLink.removeClass('text-clicked');
      }, 400);
    });

    // PROJECT SLIDE
    $('#project-slide').owlCarousel({
      loop: true,
      center: true,
      autoplayHoverPause: false,
      autoplay: true,
      margin: 30,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          }
      }
    });

  });



    
