var keywords=['reality0','idealism1','capitalism2','body3','xeno4'];
var keywordsURL=['www.anaconda.cc/reality', 'www.anaconda.cc/idealism', 'www.anaconda.cc/capitalism', 'www.anaconda.cc/body', 'www.anaconda.cc/xeno']
var cvIsVisible = false;
var contactIsVisible = false;
var diameterCircle = 200;
var $div;
var $p;
var $a;
var randomPosX;
var randomPosY;
var yyy;
var initialPositionX;
var initialPositionY;


function generateKeywordcircles() {
  for(var i=0;i<keywords.length;i++){
    $div = $('<div />').appendTo('body');
    $div2 = $('<div />').appendTo($div); //new
    $div.attr('class', 'circleAnimation');
    $p = $('<p />').appendTo($div2);
    $a = $('<a />').appendTo($p);
    $a.attr('href', keywordsURL[i]);
    $a.text( keywords[i] );
    $p.attr('class', 'textKeywords');
    $div2.attr('class', 'circle'+ i);
    //chose between 3 IDs randomly and add to div
    var rotation1 = 1;
    var rotation2 = 2;
    var rotation3 = 3;
    var randomIdCircle = Math.random() < 0.5 ? rotation1 : (Math.random() < 0.5 ? rotation2 : rotation3);
    // console.log(randomIdCircle);
    $div2.attr('id', 'rotationCircle'+ randomIdCircle);
  }
}

function positionKeywordCircles() {
  yyy = new Array();
  for(var i=0;i<keywords.length;i++){
      var grain = 100;
      // map randomly created Values to Browserwindowsize
      const randomPosX = Math.floor(Math.random() * grain);
      const randomPosY = Math.floor(Math.random() * grain);
      const scaleX = (randomPosX, in_min, in_max, out_min, out_max) => {
        return (randomPosX - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }
      const scaleY = (randomPosY, in_min, in_max, out_min, out_max) => {
        return (randomPosY - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }
      // save in variable which can be used for the animation later in CSS
      initialPositionX = scaleX(randomPosX,0, grain, 0, (window.innerWidth-diameterCircle));
      initialPositionY = scaleY(randomPosY,0, grain, 0, (window.innerHeight-diameterCircle));
      console.log(initialPositionY);
      // position
      $(".circle" + i).css("left", initialPositionX);
      $(".circle" + i).css("--keywordcircle-top", initialPositionY);
      // save position analog to className to retrieve later
      yyy.push(initialPositionY);
    }
}





function animateKeywordCircles() {
  // A animate B if any of the animated objects is more than -200, remove from array
    // $( ".circle1" ).animate({ "top": "100px" });
  //drag out of Array
  // for(var i=0;i<keywords.length;i++){
  //
  // }
  // animate
  // if
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
// click in document body to close cvCOntent and contactContent
// $(document).click(function(event) {
//     if(!$(event.target).closest('.cvContent').length) {
//         if(contactIsVisible == true) {
//             $(".cvContent").toggleClass("visible");
//             contactIsVisible = false;
//         }
//     }
// });


$( document ).ready(function() {
  calculateThumbnailHeight();
  generateKeywordcircles();
  positionKeywordCircles();
  animateKeywordCircles();

  // animation auf Y-Achse Circles
  var requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function( callback, element ){
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  var startTime = +(new Date());
  var circle = document.getElementsByClassName('circle0')[0];
  var updatePos;
  var dif2 = yyy[0];

  while (dif2 >= 50) {
    (function update(){
        var dif = (new Date()).getTime() - startTime; // zählt quasi als counter hoch
        dif *= 0.01; // dif wird immer größer, muss also nur von yyy[0] abgezogen werden
        dif2 -= dif;
        circle.style.top = dif2 +'px';
        console.log(circle.style.top);
        requestAnimFrame( update, circle, dif2 );
    })();
    // updatePos = circle.style.top;
   }

});

$(window).resize(calculateThumbnailHeight);
$(window).resize(positionKeywordCircles);

// animate the circles with jquery


// // animate the Circles with setInterval
//
// var updateCircleY = setInterval(animateCirclePosY, 60);
//
// function animateCirclePosY() {
//     yyy[0] -= 0.5;
//     yyy[1] -= 0.8;
//     yyy[2] -= 1.5;
//     yyy[3] -= 0.5;
//     yyy[4] -= 0.5;
//       for(var i=0;i<keywords.length;i++){
//         $(".circle" +i).css("--keywordcircle-top", yyy[i]);
//       }
// }
// function myStopFunction() {
//     clearInterval(updateCircleY);
// }
