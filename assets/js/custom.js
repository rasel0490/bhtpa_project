/*----- Text fade effect -----*/

(function() {
  var quotes = $(".quotes");
  var quoteIndex = -1;  
  function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
          .fadeIn(2000)
          .delay(2000)
          .fadeOut(2000, showNextQuote);
  }  
  showNextQuote();  
})();

/*----- Text fade effect end -----*/

   // Back to top button
   
  //Get the button
var mybutton = document.getElementById("backTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 3,
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


/*********For circle*********** */
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();