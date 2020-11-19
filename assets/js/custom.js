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

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
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
bongobondhu.bindPopup("<img class='img-fluid rounded' src='/assets/img/janata-tower.jpg'><h6>Kaliakair Hi-Tech Park, Gazipur</h6><a href='#'>visit here</a>").openPopup();
rajshahi.bindPopup("<img class='img-fluid rounded' src='/assets/img/rhtp.jpg'><h6>Bangabandhu Sheikh Mujib Hi-Tech Park, Rajshahi</h6><a href='#'>visit here</a>").openPopup();
sylhet.bindPopup("<img class='img-fluid rounded' src='/assets/img/janata-tower.jpg'><h6>Bangabandhu Sheikh Mujib Hi-Tech Park, Sylhet</h6><a href='#'>visit here</a>").openPopup();
janatatower.bindPopup("<img class='img-fluid rounded' src='/assets/img/janata-tower.jpg'><h6 class=''>Janata Tower Hi-Tech Park, Dhaka</h6><a href='#'>visit here</a>").openPopup();

function getColor(d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}
function style(feature) {
  return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

L.geoJson(statesData, {style: style}).addTo(mymap);
/*
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={sk.eyJ1IjoicmFzZWxhaHNhbiIsImEiOiJja2hvZ3UzMHAwNXkzMnltajF4c3g1anpsIn0.ZTzZz27cVN3RmGGB1aUqdw}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoicmFzZWxhaHNhbiIsImEiOiJja2hvZ3UzMHAwNXkzMnltajF4c3g1anpsIn0.ZTzZz27cVN3RmGGB1aUqdw'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

*/