var keywords=['reality','idealism','capitalism','bodies','xeno'];
var cvIsVisible = false;
var contactIsVisible = false;
var diameterCircle = 200;
var $div;
var randomPosX;
var randomPosY;
var $p;

function generateKeywordcircles() {
  for(var i=0;i<keywords.length;i++){
    $div = $('<div />').appendTo('body');
    $p = $('<p />').appendTo($div);
    $p.text( keywords[i] );
    $div.attr('class', 'circle'+ i);
    //generate css from here! to push text to the middle
    positionKeywordCircles();
  }

  //setTimeOut(4000ms) produce Object outside transform: translate(20px, 20px);
}

function positionKeywordCircles() {
  for(var i=0;i<keywords.length;i++){
      var grain = 100;
      const scaleX = (randomPosX, in_min, in_max, out_min, out_max) => {
        return (randomPosX - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }
      const randomPosX = Math.floor(Math.random() * grain);
      const scaleY = (randomPosY, in_min, in_max, out_min, out_max) => {
        return (randomPosY - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }
      const randomPosY = Math.floor(Math.random() * grain);
      // position
      $(".circle" + i).css("left", scaleX(randomPosX,0, grain, 0, (window.innerWidth-diameterCircle)));
      $(".circle" + i).css("top", scaleY(randomPosY,0, grain, 0, (window.innerHeight-diameterCircle)));
    }
}

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
$(document).ready(generateKeywordcircles);
$(window).resize(calculateThumbnailHeight);
$(window).resize(positionKeywordCircles);
