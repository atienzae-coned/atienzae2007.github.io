  var mindesktop = 768;  //anything less than this is mobile.
  function htmlbodyHeightUpdate(){
    var height3 = $(window).height();
    var height1 = $('.nav').height()+50;
    height2 = $('.main').height();
    //alert($(window).width());
    if(height2 > height3){
      $('html').height(Math.max(height1,height3,height2)+10);
      $('body').height(Math.max(height1,height3,height2)+10);
    }
    else {
      $('html').height(Math.max(height1,height3,height2));
      $('body').height(Math.max(height1,height3,height2));
    }
  }

  function initializesidebar() {
    //Initialize: Desktop -> always show sidebar; Mobile -> hide sidebar by default
    if ($(window).width() >= mindesktop ) {
      $('#mainSidebar').show();
      $('#bs-sidebar-navbar-collapse').collapse('show');
    }
    else {
      $('#mainSidebar').hide();
      $('#bs-sidebar-navbar-collapse').collapse('hide');
    }
  }

  $(document).ready(function(){
      htmlbodyHeightUpdate();
      $( window ).resize(function() {
        htmlbodyHeightUpdate();
        initializesidebar();
      });
      $( window ).scroll(function() {
        height2 = $('.main').height();
        htmlbodyHeightUpdate();
      });

      initializesidebar();

    // Handler so that only one can be opened between Menu and Submenu   
      $('#mainmenu').click(function() {
        if($(window).width() < mindesktop ) {
          $('#mainSidebar').hide();
          $('#bs-sidebar-navbar-collapse').collapse('hide');
        }
      });

      $('#submenu').click(function() {
        if($(window).width() < mindesktop ) {
          if ($('#mainSidebar').css("display") == "none") {
          //alert('Hey!');
            $('#mainSidebar').show();
            $('#bs-sidebar-navbar-collapse').collapse('show');
          }

          else {
            $('#mainSidebar').hide();
            $('#bs-sidebar-navbar-collapse').collapse('hide');
          }
          //alert($('#mainSidebar').css("display"));
          //$('#mainSidebar').show();
          $('#myNavbar').collapse('hide');
        }
      });

      $('[id^=circle]').click(function() { 
        if ($(window).width() < mindesktop ) {
          $('#mainSidebar').hide();
          $('#bs-sidebar-navbar-collapse').collapse('hide');
        }
        else {
          if ($('#mainSidebar').css("display") == "none") {
            $('#mainSidebar').show();
            $('#bs-sidebar-navbar-collapse').collapse('show');
          }
        }
      });
 
      //for Tooltip
      $('#bs-sidebar-navbar-collapse [data-toggle="tooltip"]').tooltip({placement: "right"});
      //Assign and enable scrollspy
      $('body').scrollspy({target: "#bs-sidebar-navbar-collapse"})
      //Enable smooth scrolling
      $("#bs-sidebar-navbar-collapse a, #mainsection1 a").click(
    function(event){
            event.preventDefault();
            var hash = this.hash;
      $('html, body').animate({
               scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
            })
    });
  });


/*Sets display to none*/
$(document).ready(function() {
        $("body").css("display", "none");
    });


$(document).ready(function() {
  $("body").css("display", "none");

  $("body").fadeIn(3000);

  $("a.transition").click(function(event){
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeOut(2000, redirectPage);      
  });
       
  function redirectPage() {
      window.location = linkLocation;
  }
});


$(document).ready(function(){ 
 $("#closeTech").click(function() { 
      $("#alertt").fadeOut("slow"); 
    });
 });


$(document).ready(function(){
  TriggerClick = 0;

  $("#LeftSide").click(function(){
    if(TriggerClick==0){
         TriggerClick=1;
         $("div#LeftSide").animate({width:'100%',overflow:'hidden'}, 500);
         //$("div#RightSide").animate({visibility:'hidden',overflow:'hidden'}, 500);
    }else{
         TriggerClick=0;
         $("div#LeftSide").animate({width:'50%'}, 500);
         $("div#RightSide").animate({display:'block'}, 500);
         
    };
  });
});


//$('#invisible').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 950)
     {
        $('#mainSidebar').fadeIn();
     }
    else
     {
      $('#mainSidebar').fadeOut();
     }
 });


//$('#invisible').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 1100)
     {
        $('#invisible').fadeIn();
     }
    else
     {
      $('#invisible').fadeOut();
     }
 });

function cycleBackgrounds() {
  var index = 0;

  $imageEls = $('.toggle-image'); // Get the images to be cycled.

  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;
    // Show the next image.
    $imageEls.eq(index).addClass('show');
    // Hide the previous image.
    $imageEls.eq(index - 1).removeClass('show');

  }, 5000);
};

// Document Ready.
$(function () {
  cycleBackgrounds();
});


function cycleBackgrounds2() {
  var index2 = 0;

  $imageEls2 = $('.toggle-image2'); // Get the images to be cycled.

  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index2 = index2 + 1 < $imageEls2.length ? index2 + 1 : 0;
    // Show the next image.
    $imageEls2.eq(index2).addClass('show');
    // Hide the previous image.
    $imageEls2.eq(index2 - 1).removeClass('show');

  }, 6000);
};

// Document Ready.
$(function () {
  cycleBackgrounds2();
});

/*IED JS*/
function switchVisible1() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible2() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible3() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible4() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible5() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible6() {
  var modal1 = document.getElementById('courseDescriptionPageIED');
  var modal2 = document.getElementById('mediaPageIED');
  var modal3 = document.getElementById('teachNotePageIED');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

/*CIM JS*/
function switchVisible7() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible8() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible9() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible10() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible11() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible12() {
  var modal1 = document.getElementById('courseDescriptionPageCIM');
  var modal2 = document.getElementById('mediaPageCIM');
  var modal3 = document.getElementById('teachNotePageCIM');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

/*POE JS*/
function switchVisible13() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible14() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible15() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible16() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible17() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible18() {
  var modal1 = document.getElementById('courseDescriptionPagePOE');
  var modal2 = document.getElementById('mediaPagePOE');
  var modal3 = document.getElementById('teachNotePagePOE');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*COPE JS*/
function switchVisible19() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible20() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible21() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible22() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible23() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible24() {
  var modal1 = document.getElementById('courseDescriptionPageCOPE');
  var modal2 = document.getElementById('mediaPageCOPE');
  var modal3 = document.getElementById('teachNotePageCOPE');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*CSE JS*/
function switchVisible25() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible26() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible27() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible28() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible29() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible30() {
  var modal1 = document.getElementById('courseDescriptionPageCSE');
  var modal2 = document.getElementById('mediaPageCSE');
  var modal3 = document.getElementById('teachNotePageCSE');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*CEA JS*/
function switchVisible31() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible32() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible33() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible34() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible35() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible36() {
  var modal1 = document.getElementById('courseDescriptionPageCEA');
  var modal2 = document.getElementById('mediaPageCEA');
  var modal3 = document.getElementById('teachNotePageCEA');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*EDD JS*/
function switchVisible37() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible38() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible39() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible40() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible41() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible42() {
  var modal1 = document.getElementById('courseDescriptionPageEDD');
  var modal2 = document.getElementById('mediaPageEDD');
  var modal3 = document.getElementById('teachNotePageEDD');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}


/*Res JS*/
function switchVisible43() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal1) {

      if (modal1 == 'none') {

          modal1.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}

function switchVisible44() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal1) {

      if (modal1 == 'none') {
        
          modal1.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal1.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible45() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal2) {

      if (modal2 == 'none') {

          modal2.style.display = 'block';
          modal3.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal3.style.display = 'block';
      }
  }

}

function switchVisible46() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal2) {

      if (modal2 == 'none') {
        
          modal2.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal2.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible47() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal3) {

      if (modal3 == 'none') {

          modal3.style.display = 'block';
          modal1.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal1.style.display = 'block';
      }
  }

}

function switchVisible48() {
  var modal1 = document.getElementById('courseDescriptionPageRes');
  var modal2 = document.getElementById('mediaPageRes');
  var modal3 = document.getElementById('teachNotePageRes');

  if (modal3) {

      if (modal3 == 'none') {
        
          modal3.style.display = 'block';
          modal2.style.display = 'none';
      }

      else {
          modal3.style.display = 'none';
          modal2.style.display = 'block';
      }
  }

}
