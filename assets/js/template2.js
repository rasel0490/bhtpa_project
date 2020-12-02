
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    
   
    }
  });
});

$("header #modalPoll-1 .form-inline .fa-search").on('click', function(){
    $("header #modalPoll-1 .form-inline").toggleClass("search-active");
});

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });

  /*
    Carousel
*/
var breakpoint = {
  // Extra Small screen / phone
  xs: 300,
  // Small screen / phone
  sm: 320,
  // Medium screen / tablet
  md: 768,
  // Large screen / desktop
  lg: 992,
  // Extra large screen / wide desktop
  xl: 1200
};
  // slick slider
$('#slick').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    infinite: true,
    dots: false,
    arrows: false,
    speed: 1000,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: breakpoint.xs,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoint.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoint.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoint.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: breakpoint.xl,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  /*********portfolio section*********** */
$('#myTabJust a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
  });

$('#myTabJust a[href="#profile"]').tab('show') // Select tab by name
$('#myTabJust li:first-child a').tab('show') // Select first tab
$('#myTabJust li:last-child a').tab('show') // Select last tab
//$('#myTabJust li:nth-child(3) a').tab('show') // Select third tab

$("section.portfolio-section .press-tab").on('click', function(){
  $(".portfolio-section").addClass("bg-press").removeClass("bg-carrier bg-tender");
});

$("section.portfolio-section .carrier-tab").on('click', function(){
$(".portfolio-section").addClass("bg-carrier").removeClass("bg-press bg-tender");
});

$("section.portfolio-section .tender-tab").on('click', function(){
$(".portfolio-section").addClass("bg-tender").removeClass("bg-press bg-carrier");
});