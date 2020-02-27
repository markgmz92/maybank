setInterval(function scroll() {
    $("div").each(function(i, e) {
      $("html, body").animate({
        scrollTop: $(e).offset().top
      }, 10000).delay(8000); // First value is a speed of scroll, and second time break
    });
  
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 10000); // This is the speed of scroll up
    }, 10000); //This means after what time should it begin (after scrolling ends)
    return scroll;
  }(), 10000);