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

  

/*********Project portfolio section*********** */
$('#myTabMD a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
  });

 // $('#myTabMD a[href="#operational"]').tab('show') // Select tab by name
$('#myTabMD li:first-child a').tab('show') // Select first tab
$('#myTabMD li:last-child a').tab('show') // Select last tab
$('#myTabMD li:nth-child(3) a').tab('show') // Select third tab

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

/*========map==========*/


var mymap = L.map('mapid').setView([23.75, 90.39], 8);
//var bongobondhumap = L.map('mapid').setView([24.06, 90.22], 6);

L.tileLayer.grayscale('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  /*attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',*/
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);


var jsr = L.marker([23.15, 89.22]).addTo(mymap);
var bongobondhu = L.marker([24.06, 90.22]).addTo(mymap);
var rajshahi = L.marker([24.37, 88.55]).addTo(mymap);
var sylhet = L.marker([25.05, 91.79]).addTo(mymap);
var janatatower = L.marker([23.75, 90.39]).addTo(mymap);

jsr.bindPopup("<img class='img-fluid rounded' src='/assets/img/shsp.jpg'><h6>Sekh Hasina Software Technology Park!</h6><a href='#'>visit here</a>").openPopup();
rajshahi.bindPopup("<img class='img-fluid rounded' src='/assets/img/rhtp.jpg'><h6>Bangabandhu Sheikh Mujib Hi-Tech Park, Rajshahi</h6><a href='#'>visit here</a>").openPopup();
sylhet.bindPopup("<img class='img-fluid rounded' src='/assets/img/sylhet-park.jpg'><h6>Bangabandhu Sheikh Mujib Hi-Tech Park, Sylhet</h6><a href='#'>visit here</a>").openPopup();
janatatower.bindPopup("<img class='img-fluid rounded' src='/assets/img/janata-tower.jpg'><h6 class=''>Janata Tower Hi-Tech Park, Dhaka</h6><a href='#'>visit here</a>").openPopup();
bongobondhu.bindPopup("<img class='img-fluid rounded' src='/assets/img/kaliakair-park.jpg'><h6>Kaliakair Hi-Tech Park, Gazipur</h6><a href='#'>visit here</a>").openPopup();

/*****Vedio background off****** */
/*var modal = document.querySelector('.intro-vedio')
//var closeBtn = document.querySelector('.close')
var clickAnywhere = document.querySelector('.page-container')
var player

var onYouTubeIframeAPIReady = function () {
  player = new YT.Player('player')
}

// When the close button gets clicked, check if the player
// got already initialised, and if so, pause it.
clickAnywhere.addEventListener('click', function () {
  modal.style.display = 'none'

  if (player) {
    player.pauseVideo()
  }
})*/



$(document).ready(function() {

  // Gets the video src from the data-src on each button
  var $videoSrc;  
  $('.play-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);  
    
  // when the modal is opened autoplay it  
  $('#modalYT').on('shown.bs.modal', function (e) {
      
  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#player").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
  
  // stop playing the youtube video when I close the modal
  $('#modalYT').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#player").attr('src',$videoSrc); 
  }) 
    
  // document ready  
  });
  
  
  

/*
function init() {
  var map = L.map('map', { fadeAnimation: false }).setView([25, -4], 3);
  L.tileLayer.grayscale('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 14, minZoom: 2
  }).addTo(map);
}*/