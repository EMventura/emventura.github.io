$(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
      scroll: true,
      scrollOffset: 60,
      scrollTo: "panel",                  // panel or listitem
      animationSpeed: 400,
      animationEasing: "easeInOutExpo",
      showNav: true,                      // Show Navigation
      nextText: "<i class='fa fa-chevron-right'></i>",                   // Next button text
      prevText: "<i class='fa fa-chevron-left'></i>",               // Previous button text
      closeText: "<i class='fa fa-times'></i>",                 // Close button text
      onStart: function(){
        //Gridder Inititialized
      },
      onContent: function(){
        //Gridder Content Loaded
      },
      onClosed: function(){
        //Gridder Closed
      }
    });
  
    $('#address-icon').on("touchstart click", function(){
      console.log("here");
      $('.address').addClass('active');
    });
  
  });
  