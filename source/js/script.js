(function ($) {
    'use strict';


    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navbar').offset().top > 100) {
            $('.navbar').addClass('bg-white');
        } else {
            $('.navbar').removeClass('bg-white');
        }
    });
    // navbar-white
    $(window).scroll(function () {
        if ($('.navbar-2').offset().top > 100) {
            $('.navbar-2').addClass('bg-primary');
        } else {
            $('.navbar-2').removeClass('bg-primary');
        }
    });

    // AOS
    AOS.init();

    // venobox
    $('.venobox').venobox();

    // mixitup filter
    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
    var mixer;
    if (containerEl) {
        mixer = mixitup(containerEl, {
            selectors: {
                target: '[data-ref~="mixitup-target"]'
            }
        });
    }

    //Active changer
    $('.control').on('click', function () {
        $('.control').removeClass("active");
        $(this).addClass("active");
    });

    // service work slider
    $('.work-slider').slick({
        dots: false,
        speed: 300,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });               


})(jQuery);