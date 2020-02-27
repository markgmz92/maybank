setInterval(function scroll() {
    $("div").each(function(i, e) {
      $("html, body").animate({
        scrollTop: $(e).offset().top
      }, 9500).delay(500); // First value is a speed of scroll, and second time break
    });
  
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 9000); // This is the speed of scroll up
    }, 2000); //This means after what time should it begin (after scrolling ends)
    return scroll;
  }(),10000);