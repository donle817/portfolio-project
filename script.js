  function navScroll() {
    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
  
        if ($(this).attr('href') == "#aboutMeSection") {
           $('html, body').animate({scrollTop: $(".aboutMeSection").offset().top - 50},700);
           $('.topnav').removeClass('responsive');
        }
  
        if ($(this).attr('href') == "#projectsSection") {
           $('html, body').animate({scrollTop: $(".projectsSection").offset().top -50},700);
           $('.topnav').removeClass('responsive');
        }
  
        if ($(this).attr('href') == "#contactSection") {
           $("html, body").animate({scrollTop: $(document).height() - $(window).height() }, 700);
           $('.topnav').removeClass('responsive');
        }

    });
  }

  function initializeFunctions() {
    navScroll();
  }

  $(initializeFunctions)