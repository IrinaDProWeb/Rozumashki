$(function(){

    $('.slider-inner').slick({
        centerMode: true,
        centerPadding: '320px',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='../images/slider/prev-arrow.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../images/slider/next-arrow.svg' class='next' alt='2'>",

        responsive: [
            {
              breakpoint: 1100,
              settings: {
                centerPadding: '250px',
              }
            },

            {
              breakpoint: 1000,
              settings: {
                centerPadding: '200px',
              }
            },

            {
                breakpoint: 900,
                settings: {
                  centerPadding: '150px',
                }
            },

            {
                breakpoint: 800,
                settings: {
                    centerPadding: '100px',
                }
            },

            {
                breakpoint: 700,
                settings: {
                    centerMode: false,
                }
            }
        ]

       });

    $('.menu-burger').click(function() {
        $('.menu-burger, .top-menu-list, .logo-img').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
      });

});