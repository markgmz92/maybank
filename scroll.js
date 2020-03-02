$(document).ready(function() { 
    $("button").click(function() { 
        $("html, body").animate({ 
            scrollTop: $( 
              'html, body').get(0).scrollHeight 
        }, 6000); 
        
    }); 

}); 
