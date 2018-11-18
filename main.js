var cvIsVisible = false;
var contactIsVisible = false;
var diameterCircle = 200;

// ------------------------------------------------------------------------------------------------------------

var keywords=['reality0','idealism1','capitalism2','body3','xeno4'];
var keywordsURL=['www.anaconda.cc/reality', 'www.anaconda.cc/idealism', 'www.anaconda.cc/capitalism', 'www.anaconda.cc/body', 'www.anaconda.cc/xeno']

var $wrapper;
var $div;
var $p;
var $a;
var randomPosX;
var randomPosY;
var yyy;
var initialPositionX;
var initialPositionY;
var circleArr = new Array();
var startTime = +(new Date());
var circle;

// The Circle "constructor" is responsible for creating the circle objects and defining the various properties they have
//

// function Circle(initialX, initialY) {
//     this.initialX = initialX;
//     this.initialY = initialY;
//     var dif = (new Date()).getTime() - startTime; // zählt als counter hoch /müsste sich eigentlich permanent updaten, tut sie das über  Circle.prototype.update?
//     this.incrementer = dif * 0.01;
//     console.log(this.incrementer);
//     console.log("initialX : " + initialX);
// }

//This function updates the positioning values of the circle // is called by function draw permanently

// Circle.prototype.update = function () {

    // this.currentY = this.initialY + this.incrementer;
    // console.log(this.currentY);
    //
    // // The following code is responsible for actually drawing the circle on the screen // keyword.length times
    //
    //
    // // position
    // for (var i = 0; i < keywords.length; i++) {
    //   $(".circle" + i).css("left", this.initialX);
    //   $(".circle" + i).css("--keywordcircle-top", this.currentY);
//     // }
// };

// This function creates the circles that you end up seeing
//
// function createCircles() {
//     for (var i = 0; i < keywords.length; i++) { //amount of circles drawn
//         create circles in HTML, amount according to amount of keywords
//         $div = $('<div />').appendTo('body');
//         $div2 = $('<div />').appendTo($div); //new
//         $div.attr('class', 'circleAnimation');
//         $p = $('<p />').appendTo($div2);
//         $a = $('<a />').appendTo($p);
//         $a.attr('href', keywordsURL[i]);
//         $a.text( keywords[i] );
//         $p.attr('class', 'textKeywords');
//         $div2.attr('class', 'circle'+ i);
//         // var rotation1 = 1; //chose between 3 IDs randomly and add to div
//         // var rotation2 = 2;
//         // var rotation3 = 3;
//         // var randomIdCircle = Math.random() < 0.5 ? rotation1 : (Math.random() < 0.5 ? rotation2 : rotation3);
//         // $div2.attr('id', 'rotationCircle'+ randomIdCircle);
//
//
//         var grain = 100;
//         // map randomly created Values to Browserwindowsize
//         const randomPosX = Math.floor(Math.random() * grain);
//         const randomPosY = Math.floor(Math.random() * grain);
//         const scaleX = (randomPosX, in_min, in_max, out_min, out_max) => {
//           return (randomPosX - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
//         }
//         const scaleY = (randomPosY, in_min, in_max, out_min, out_max) => {
//           return (randomPosY - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
//         }
//         var initialX = scaleX(randomPosX,0, grain, 0, (window.innerWidth-diameterCircle));
//         var initialY = scaleY(randomPosY,0, grain, 0, (window.innerHeight-diameterCircle));
//
//         // create the initial Circle object
//         var circle = new Circle(initialX, initialY);
//         circleArr.push(circle);
//         console.log(circle);
//     }
//
//     requestAnimationFrame(draw);
// }
//
// createCircles();
//
// function draw() {
//     // actually draw the circles with permanently updated values
//     for (var i = 0; i < circleArr.length; i++) {
//         var circle = circleArr[i];
//         circle.update();
//     }
//
//     // call the draw function again!
//     requestAnimationFrame(draw);
// }

//----------------------------------

//
//
// function generateKeywordcircles() {
//   for(var i=0;i<keywords.length;i++){
//     $div = $('<div />').appendTo('body');
//     $div2 = $('<div />').appendTo($div); //new
//     $div.attr('class', 'circleAnimation');
//     $p = $('<p />').appendTo($div2);
//     $a = $('<a />').appendTo($p);
//     $a.attr('href', keywordsURL[i]);
//     $a.text( keywords[i] );
//     $p.attr('class', 'textKeywords');
//     $div2.attr('class', 'circle'+ i);
//     //chose between 3 IDs randomly and add to div
//     var rotation1 = 1;
//     var rotation2 = 2;
//     var rotation3 = 3;
//     var randomIdCircle = Math.random() < 0.5 ? rotation1 : (Math.random() < 0.5 ? rotation2 : rotation3);
//     // console.log(randomIdCircle);
//     $div2.attr('id', 'rotationCircle'+ randomIdCircle);
//   }
// }
//
// function positionKeywordCircles() {
//   yyy = new Array();
//   for(var i=0;i<keywords.length;i++){
//       var grain = 100;
//       // map randomly created Values to Browserwindowsize
//       const randomPosX = Math.floor(Math.random() * grain);
//       const randomPosY = Math.floor(Math.random() * grain);
//       const scaleX = (randomPosX, in_min, in_max, out_min, out_max) => {
//         return (randomPosX - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
//       }
//       const scaleY = (randomPosY, in_min, in_max, out_min, out_max) => {
//         return (randomPosY - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
//       }
//       // save in variable which can be used for the animation later in CSS
//       initialPositionX = scaleX(randomPosX,0, grain, 0, (window.innerWidth-diameterCircle));
//       initialPositionY = scaleY(randomPosY,0, grain, 0, (window.innerHeight-diameterCircle));
//       // position
//       $(".circle" + i).css("left", initialPositionX);
//       $(".circle" + i).css("--keywordcircle-top", initialPositionY);
//       // save position analog to className to retrieve later
//       yyy.push(initialPositionY);
//     }
// }
//
// var calculateThumbnailHeight = (function () {
//        var patternist02Height = $('#patternist02').height();
//        $('.clipProjecttitle').css('height', patternist02Height);
//        var patternist03Height = $('#patternist03').height();
//        $('.clipProjecttitle2').css('height', patternist03Height);
//        console.log(patternist02Height);
//    });
//
// // parallax
// var nononoyesno = document.querySelector(".textThumbnail");
// var bigCircle = document.querySelector(".circleBig");
//
// function setTranslate(xPos, yPos, el) {
//    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
// }
//
// window.addEventListener("DOMContentLoaded", scrollLoop, false);
//
// var xScrollPosition;
// var yScrollPosition;
//
// function scrollLoop() {
//    xScrollPosition = window.scrollX;
//    yScrollPosition = window.scrollY;
//    setTranslate(0, yScrollPosition * -0.4, nononoyesno);
//    setTranslate(0, yScrollPosition * -0.8, bigCircle);
//    requestAnimationFrame(scrollLoop);
// }

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

// $( document ).ready(function() {
//   // calculateThumbnailHeight();
//   // generateKeywordcircles();
//   // positionKeywordCircles();
//
//   // animation auf Y-Achse Circles
//   // var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//   //                             window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//   //
//   // var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
//   //
//   //
//   // var circle;
//   // var updatePos = yyy;
//   // var dif2 = yyy;
//   // var myReq;
//   //
//   // for(var i=0;i<keywords.length;i++){
//   //   circle = document.getElementsByClassName('circle' + i);
//   //   function step() {
//   //     var dif = (new Date()).getTime() - startTime; // zählt als counter hoch
//   //     dif *= 0.01; // dif wird immer größer, muss also nur von yyy[0] abgezogen werden
//   //     // console.log(updatePos); //muss drin bleiben
//   //     updatePos[i]=dif2[i]-dif; // hier 6 mal
//   //     circle.style.top = updatePos[i] +'px';
//   //     if (updatePos[i] > 50) {
//   //       myReq = requestAnimationFrame(step, circle);
//   //     }
//   //     function pushCircles () {
//   //
//   //     }
//   //   }
//   //   myReq = requestAnimationFrame(step, circle);
//   // }
//
// });

// $(window).resize(calculateThumbnailHeight);
// $(window).resize(positionKeywordCircles);


var circleArrPos = new Array();
var circleArrPosY = new Array();

class KeywordCircle {
    constructor(initialX,initialY){
        this.initialX = initialX;
        this.initialY = initialY;
    }
}

function createCircles() { // produziert alle X und Y Werte
    for(var i=0;i<keywords.length;i++){
        // create random initial positions
        var grain = 100;
        const randomPosX = Math.floor(Math.random() * grain);
        const randomPosY = Math.floor(Math.random() * grain);
        const scaleX = (randomPosX, in_min, in_max, out_min, out_max) => {
        return (randomPosX - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }
        const scaleY = (randomPosY, in_min, in_max, out_min, out_max) => {
        return (randomPosY - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }
        var initialX = scaleX(randomPosX,0, grain, 0, (window.innerWidth-diameterCircle));
        var initialY = scaleY(randomPosY,0, grain, 0, (window.innerHeight-diameterCircle));

        circle = new KeywordCircle(initialX,initialY);
        circleArrPos.push(circle); // Array mit allen KeywordCircle Instanzen
    }
}


function draw() {
    var dif = (new Date()).getTime() - startTime; // zählt als counter hoch
    dif *= (-0.01);
    for(var i=0;i<keywords.length;i++){
        var circlesUpdate = circleArrPosY[i] + dif; // create 6 values which
        circleArrPos[i].initialY = circlesUpdate;
        $(".circle" + i).css("--keywordcircle-top", circleArrPos[i].initialY);
  }
  requestAnimationFrame(draw);
}

function drawFirstCircles() {

    createCircles();

    for(var i=0;i<keywords.length;i++){
        $wrapper = $('<div />').appendTo('body');
        $wrapper.attr('class', 'circleAnimation');
        $div = $('<div />').appendTo($wrapper);
        $p = $('<p />').appendTo($div);
        $a = $('<a />').appendTo($p);
        $a.attr('href', keywordsURL[i]);
        $a.text( keywords[i] );
        $p.attr('class', 'textKeywords');
        $div.attr('class', 'circle'+ i);
        // rotation
        var rotation1 = 1;
        var rotation2 = 2;
        var rotation3 = 3;
        var randomIdCircle = Math.random() < 0.5 ? rotation1 : (Math.random() < 0.5 ? rotation2 : rotation3);
        $div.attr('id', 'rotationCircle'+ randomIdCircle);
        // position (kann später mit updateCircles raus?)
        $(".circle" + i).css("left", circleArrPos[i].initialX);
        $(".circle" + i).css("--keywordcircle-top", circleArrPos[i].initialY);
        circleArrPosY.push(circleArrPos[i].initialY);
    }
    draw();
  }

drawFirstCircles();
