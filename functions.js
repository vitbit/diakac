// Browser detection for when you get desparate.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

var s_saver;

function setupScreenSaver(){
  activationTime = $('body').data('hls-screensaver-activation-time')*1000;

  clearTimeout(s_saver);
  s_saver = setTimeout(function(){
    $('#slogan').stop(true).fadeTo(1200, 1).removeClass('no-events');
  }, activationTime);

  $(window).mousemove(function() {
    clearTimeout(s_saver);
    s_saver = setTimeout(function(){
      $('#slogan').stop(true).fadeTo(1200, 1).removeClass('no-events');
    }, activationTime);
    $('#slogan').stop(true).fadeTo(450, 0).addClass('no-events');
  });
  $(window).bind('touchmove', function() {
    clearTimeout(s_saver);
    s_saver = setTimeout(function(){
      $('#slogan').stop(true).fadeTo(1200, 1).removeClass('no-events');
    }, activationTime);
    $('#slogan').stop(true).fadeTo(450, 0).addClass('no-events');
  });
}


// remap jQuery to $
(function($){


  /* trigger when page is ready */
  $(document).ready(function (){
    $('#slogan').click(function(){
      $('#slogan').stop(true).fadeOut();
      setupScreenSaver();
    });

    $('ol.wp-paginate .page').last().addClass('no-comma');

    if ($('body').hasClass('home') && document.referrer.indexOf('haw-lin-services.com') == -1) {
      $('#slogan').fadeTo($('body').data('hls-screensaver-display-time')*1000, 1, function(){
        $('#slogan').fadeTo(450, 0, function(){
          setupScreenSaver();
        });
      });
    } else {
      $('#slogan').css({ 'opacity': 0 });
      setupScreenSaver();
    }

  });

  $("img.lazy").unveil(200, function() {
    $(this).imagesLoaded(function() {
      $(this).css({ 'opacity': 1 });
    });
  });

});


$(window).load(function() {
  resizeProjectImages();  
});
/*
$(window).resize(function() {
	
});

*/


})(window.jQuery);
