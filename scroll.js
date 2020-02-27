setInterval(function scroll() {
    $("div").each(function(i, e) {
      $("html, body").animate({
        scrollTop: $(e).offset().top
      }, 5000).delay(500); // First value is a speed of scroll, and second time break
    });
  
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 5000); // This is the speed of scroll up
    }, 2000); //This means after what time should it begin (after scrolling ends)
    return scroll;
  }(),1000); //This value means after what time should the function be triggered again
  //(It should be sum of all animation time and delay) 9000 = 5000 + 4000
