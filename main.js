var keywords=['reality','idealism','capitalism','bodies','xeno'];
var cvIsVisible = false;
var contactIsVisible = false;
var diameterCircle = 200;

function generateKeywordcircles() {
  for(var i=0;i<keywords.length;i++){
    var $div = $('<div />').appendTo('body');
    // var randomPosX = Math.floor((Math.random() * window.innerWidth)- diameterCircle);
    // map to fit browser width
    // const randomPosXMapped = (randomPosX, in_min, in_max, out_min, out_max) => {
    //   return (randomPosX - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    // }
    // const randomPosX = Math.random()*10;
    // randomPosXMapped(randomPosX, 0, 1, 0, 1920);

    // map end
    // $div.css("left", randomPosXMapped);
    // console.log(randomPosX);
    // console.log(randomPosXMapped);

    var randomPosX = Math.floor((Math.random() * window.innerWidth)- diameterCircle);

    const scale = (num, in_min, in_max, out_min, out_max) => {
      return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    const num = 2;
    // const num = Math.floor(Math.random() * 10);
    console.log("in" + num);
    console.log("out" + scale(num,0, 10, 0, window.innerWidth));
    $div.attr('class', 'circle'+ i);
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
$(window).resize(generateKeywordcircles);
