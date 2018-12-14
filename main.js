var cvIsVisible = false;
var contactIsVisible = false;
var diameterCircle = 200;

// ------------------------------------------------------------------------------------------------------------

var keywords=['reality0','idealism1','capitalism2','body3','xeno4'];
var keywordsURL=['www.anaconda.cc/reality', 'www.anaconda.cc/idealism', 'www.anaconda.cc/capitalism', 'www.anaconda.cc/body', 'www.anaconda.cc/xeno']
var projectlist = ['The Great Encounter, The Ending', 'The Young Planet', '04PP', 'Shush Tones', 'Berlin Netzkunst', 'Next Project', 'TongueTongue', 'The Great Encounter, The Ending', 'The Young Planet', '04PP', 'Shush Tones', 'Berlin Netzkunst', 'Next Project', 'TongueTongue']

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
var startTimeArr = new Array(5);

var circle;

var circleObjectArr = new Array(); // Object mit allen Instanzen
var circleObjectArrPosY = new Array(); // aus Object herausdistillierte y-Werte
var stepArr = new Array(5);
let start = null;

var initialX;
var initialY;

var circlePosUpdate;

var slideIndex = 1;
var closeSlideshow = false;
var counter = 0;

// calculate scrollposition

$(function() { /* jQuery short for $(document).ready(function() { ... }); */
    // $('#dvContent2').hide();

    // calculate scrollposition
    $(".projecttext").hide();

    // $( ".projecttitleContainer" ).hover(
    //   function() {
    //     console.log("works in");
    //     $(this).css('cursor', 'pointer');
    //     $(this).hide();
    //     $(".projecttext").show();
    //   }, function() {
    //     console.log("works out");
    //     $(this).show();
    //     $(".projecttext").hide();
    //   }
    // );

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        /* now compute browserheight = y*/
        if (scroll >= 100) {
            // $('#dvContent').hide();
            // $('#dvContent2').show();
        } else {
            // $('#dvContent').show();
            // $('#dvContent2').hide();
        }
    });

    // $( ".projecttitleContainer" ).mouseenter(function() {
    //   $( this ).stop().animate({
    //     opacity: 0,
    //   }, 400, function() {
    //       $( '.containerProjecttitle').stop().css('display', 'block').animate({
    //         opacity: 1,
    //       }, 400);
    //   });
    // });
    // $( ".projecttitleContainer" ).mouseleave(function() {
    //   $( this ).stop().animate({
    //     opacity: 1,
    //   }, 400, function() {
    //       $( '.containerProjecttitle').stop().css('display', 'block').animate({
    //         opacity: 0,
    //       }, 400);
    //   });
    // });
    //




});


showSlides(slideIndex); // zeigt erstes Bild an

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
counter++;
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  if (counter > slides.length) {
       $('.slideshow-container').addClass('hide').removeClass('show');
       closeSlideshow = true;
       // n = 1; //slideIndex?
       counter = 1;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  console.log("counter" + counter);
}


$(document).click(function() {
    if (closeSlideshow==true) {
        $('.slideshow-container').addClass('hide').removeClass('show');
        closeSlideshow = false;
    }
});

$(".projecttitleContainer").click(function(event) {

    $('.slideshow-container').addClass('show').removeClass('hide');
    event.stopPropagation();
});





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

var initialSpanWrapperWidthArr = new Array();
var spanWrapperWidth;
var updateSpanWrapperWidthArr;

var element = document.body;

console.log(window.innerHeight);

function myScroll() {
  // var elem = $('body,html').scrollTop();
  var elmnt = document.body;
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    console.log(y);
}

myScroll();

function createProjectlist() {

  updateSpanWrapperWidthArr = new Array(projectlist.length);

  for(var i=0;i<projectlist.length;i++){
    updateSpanWrapperWidthArr[i]=0; //fill empty array with zeros
    var $spanClass = $(".wrapperSpans div div").eq( i ).attr('class', 'wrapperProject' + i);
    spanWrapperWidth = $('.wrapperProject' + i).width();
    initialSpanWrapperWidthArr.push(spanWrapperWidth);

    while (updateSpanWrapperWidthArr[i] <= window.innerWidth){
        var $wrapperSpan = $('<span />').appendTo('.wrapperProject'+i);
        $wrapperSpan.attr('class', 'wrapperSpan');
        $wrapperSpan.text(projectlist[i]);
        updateSpanWrapperWidthArr[i] += initialSpanWrapperWidthArr[i];
    }
  }
  console.log("initialSpanWrapperWidthArr " + initialSpanWrapperWidthArr);
  console.log("window.innerWidth " + window.innerWidth);
  console.log("updateSpanWrapperWidthArr " + updateSpanWrapperWidthArr);
}

// ----------------------------------------------------------------------------

class KeywordCircle {
    constructor(initialX,initialY){
        this.initialX = initialX;
        this.initialY = initialY;
    }
}

function generateCirclePosition() { // 1.1
    var grain = 100;
    const randomPosX = Math.floor(Math.random() * grain);
    const randomPosY = Math.floor(Math.random() * grain);
    const scaleX = (randomPosX, in_min, in_max, out_min, out_max) => {
    return (randomPosX - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    const scaleY = (randomPosY, in_min, in_max, out_min, out_max) => {
    return (randomPosY - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    initialX = scaleX(randomPosX,0, grain, 0, (window.innerWidth-diameterCircle));
    initialY = scaleY(randomPosY,0, grain, 0, (window.innerHeight-diameterCircle));
}

function createInitialCircles() { // 1.2
    for(var i=0;i<5;i++){ //generates 5 initial circles
        generateCirclePosition();
        circle = new KeywordCircle(initialX,initialY);
        circleObjectArr.push(circle); // Array mit allen KeywordCircle Instanzen
        circleObjectArrPosY.push(circleObjectArr[i].initialY); // Array mit allen Keyword Instanzen y-Werten
    }
    // console.log("circleObjectArr: " + circleObjectArr);
    console.log("circleObjectArrPosY: " + circleObjectArrPosY);
}


function updateCirclePos() {
    var step = (new Date()).getTime() - startTime; // zählt als counter hoch
    step *= (-0.01);

    // for(var i=0;i<5;i++){
    // }
    // console.log("steppArr: " + stepArr); funktioniert
    function bla() {
      for(var i=0;i<5;i++){ //circleObjectArr verändert sich innerhalb der for Schleife, aber nicht außerhalb....
        stepArr[i]=step;
        startTimeArr[i] = startTime;
        circlePosUpdate = circleObjectArrPosY[i] + stepArr[i];
        circleObjectArr[i].initialY = circlePosUpdate;
        $(".circle" + i).css("--keywordcircle-top", circleObjectArr[i].initialY);

          // if (circleObjectArr[i].initialY < 50) {
          //   circleObjectArrPosY[i] = 500;
          //
          //   startTime[i] = +(new Date()); // reset Starttime
          //   updateCirclePos();
          //   //   // generateCirclePosition();
          //   //   circleObjectArr[i].initialY = 200;
          //   //   console.log(circleObjectArr[i].initialY);
          //   //   // $(".circle" + i).css("left", circleObjectArr[i].initialX);
          //   //   $(".circle" + i).css("--keywordcircle-top", circleObjectArr[i].initialY);
          //   //   // updateCirclePos(); // starte updateCircle von Anfang an
          // }
          // REBIRTH NEW CIRCLE
          // if (circleObjectArr[i].initialY < 50) {


            // updateCirclepos?
            // generateCirclePosition();
            // circle = new KeywordCircle(initialX,initialY);
            // circleObjectArr.push(circle);
            // $(".circle" + i).css("left", circleObjectArr[i].initialX);
            // $(".circle" + i).css("--keywordcircle-top", circleObjectArr[i].initialY);
            // circleObjectArrPosY.push(circleObjectArr[i].initialY);
            //
            // console.log(i);
            // console.log("davor: "+circleObjectArrPosY[i]);
            // console.log(circleArrPos[i].initialY);
            // circleObjectArrPosY[i] = window.innerHeight-100;//array updatet sich nicht
            // circleObjectArr[i].initialY = circleObjectArrPosY[i];
            // console.log("danach: "+circleObjectArrPosY[i]);
            // console.log(circleObjectArr[i].initialY);
            // debugger;
          // }

        }
    }
    requestAnimationFrame(updateCirclePos);

}

function drawFirstCircles() { // 2
  // createInitialCircles(); //raus und stattdessen in document.ready function drinlassen?
    for(var i=0;i<5;i++){
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
        $(".circle" + i).css("left", circleObjectArr[i].initialX);
        $(".circle" + i).css("--keywordcircle-top", circleObjectArr[i].initialY);
    }

    $('.aboutIcon').css("left", initialX);
    $('.aboutIcon').css("top", initialY);
    $('.aboutIcon').attr('id', 'rotationCircle2');

    // updateCirclePos(); //raus und stattdessen in document.ready function drinlassen?
  }

 $(document).ready(function(){
     createProjectlist();
     createInitialCircles();
     drawFirstCircles();
     updateCirclePos();
 });



 var calculateThumbnailHeight = (function () {
         // dynamically calculate and change value of clipProjecttitle based on Height of imageThumbnail
         var imageHeight = $(".containerThumbnail1").innerHeight();
         $(".clipProjecttitle1").css('--height-clip', imageHeight);
         $(".uno").css('--height-clip', imageHeight);
         console.log("innerHeight = " + imageHeight);

         var imageHeight2 = $(".containerThumbnail2").innerHeight();
         $(".clipProjecttitle2").css('--height-clip2', imageHeight2);
         $(".due").css('--height-clip2', imageHeight2);
         console.log("innerHeight2 = " + imageHeight2);

         var imageHeight3 = $(".containerThumbnail3").innerHeight();
         $(".clipProjecttitle3").css('--height-clip3', imageHeight3);
         $(".tres").css('--height-clip3', imageHeight3);
         console.log("innerHeight3 = " + imageHeight3);
    });

$(document).ready(calculateThumbnailHeight);
$(window).resize(calculateThumbnailHeight);
