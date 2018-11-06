var calculateThumbnailHeight = (function () {
       var patternist02Height = $('#patternist02').height();
       $('.clipProjecttitle').css('height', patternist02Height);
       var patternist03Height = $('#patternist03').height();
       $('.clipProjecttitle2').css('height', patternist03Height);
       console.log(patternist02Height);
   });

$(document).ready(calculateThumbnailHeight);
$(window).resize(calculateThumbnailHeight);
