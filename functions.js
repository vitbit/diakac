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

function resizeProjectImages(){
  var $heightAdjust = 178

  if ($('#category-listing').hasClass('active')) {
    $heightAdjust = $heightAdjust + $('#category-listing').height() + 30;
  }
  $('article.cycle-slideshow.project-cycle').height($(window).height() - $heightAdjust - $('div#breadcrumbs').height());
  $('.project-cycle img').each(function(){
    $(this).css({
      'marginLeft': -Math.floor($(this).width()/2)
    });
  });
}

function fbs_click() {u=location.href;t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436'); return false;}

var x = document.getElementsByTagName('a');
for (var i=0;i<x.length;i++) {
  if (x[i].getAttribute('type') == 'popup') {
    x[i].onclick = function () {
      return pop(this.href)
      console.log('hi')
    }
    x[i].title += ' (Popup)';
  }
}

function pop(url) {
  newwindow=window.open(url,'name','height=256,width=570');
  if (window.focus) {newwindow.focus()}
    return false;
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
    

    $('.nav-categories').click(function(e){
      e.preventDefault();

      $('#nav-categories').addClass('active');

      $('#category-listing').show();
      $('#category-listing').addClass('active');
      resizeProjectImages();
    });

    $('.cycle-slideshow').trigger('resize');

    $(window).on("throttledresize", function(){
      resizeProjectImages();
    });

    $('.project-cycle').imagesLoaded(function(){
      resizeProjectImages();
      $('.project-text.cycle-item').css({
        visibility: 'hidden',
        display:    'block'
      });
      $('#project-text-inner').css({ 'marginTop': -$('#project-text-inner').height()/2 });
      $('.project-text.cycle-item').css({
        visibility: 'visible',
        display:    'none'
      });
      $('#cycle-cover').fadeOut();
    });

    $(document.documentElement).keyup(function (e) {
      if (e.keyCode == 39)
      {        
       $('.project-cycle').cycle('next');
     }

     if (e.keyCode == 37)
     {
      $('.project-cycle').cycle('prev');
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
