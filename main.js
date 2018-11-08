var cvIsVisible = false;
var contactIsVisible = false;

var calculateThumbnailHeight = (function () {
       var patternist02Height = $('#patternist02').height();
       $('.clipProjecttitle').css('height', patternist02Height);
       var patternist03Height = $('#patternist03').height();
       $('.clipProjecttitle2').css('height', patternist03Height);
       console.log(patternist02Height);
   });


   // parallax

var nononoyesno = document.querySelector(".textThumbnail");
var bigCircle = document.querySelector(".circleBig");

function setTranslate(xPos, yPos, el) {
   el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
   xScrollPosition = window.scrollX;
   yScrollPosition = window.scrollY;
   setTranslate(0, yScrollPosition * -0.4, nononoyesno);
   setTranslate(0, yScrollPosition * -0.8, bigCircle);
   requestAnimationFrame(scrollLoop);
}

$( ".cv" ).on( "click", function() {
  if (contactIsVisible == true) {
      $(".contactContent").toggleClass("visible");
      contactIsVisible = false;
  }
  $(".cvContent").toggleClass("visible");
  cvIsVisible = true;
  $(body).css('background-color', 'white');
});

$( ".contact" ).on( "click", function() {
  if (cvIsVisible == true) {
      $(".cvContent").toggleClass("visible");
      cvIsVisible = false;
  }
  $(".contactContent").toggleClass("visible");
  contactIsVisible = true;
});

// $(document).click(function(event) {
//     if(!$(event.target).closest('.cvContent').length) {
//         if(contactIsVisible == true) {
//             $(".cvContent").toggleClass("visible");
//             contactIsVisible = false;
//         }
//     }
// });

$(document).ready(calculateThumbnailHeight);
$(window).resize(calculateThumbnailHeight);
