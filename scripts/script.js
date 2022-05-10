$(document).ready(function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 200) {
        $("#masthead").addClass("scrolled");
      } else {
        $("#masthead").removeClass("scrolled");
      }
    });
  });