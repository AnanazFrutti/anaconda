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
var circle;

var circleArrPos = new Array();
var circleArrPosY = new Array();


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

   $(document).ready(function(){
     createProjectlist();
     drawFirstCircles();

   });
