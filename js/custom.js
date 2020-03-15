$(document).ready(function(){
    $('#bar1').barfiller({barColor:'orange', duration:'4000'});
    $('#bar2').barfiller({barColor:'orange', duration:'4000'});
    $('#bar3').barfiller({barColor:'orange', duration:'4000'});
    $('#bar4').barfiller({barColor:'orange', duration:'2000'});
    $('#bar5').barfiller({barColor:'orange', duration:'4000'});
    $('#bar6').barfiller({barColor:'orange', duration:'4000'});
    $('#bar7').barfiller({barColor:'orange', duration:'4000'});
    $('#bar8').barfiller({barColor:'orange', duration:'4000'});
});


// header-sticky
$(document).ready(function(){
    $("#headerSection").sticky({
    topSpacing:0,
    'zIndex':"",
    
    
    });
  });




// back-to-top
  $(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });
       // scroll body to 0px on click
       $('#back-to-top').click(function () {
           
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
      

});


  
