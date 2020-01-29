(function($){

  // Magnific Popup by Dmitry Semenov for video gallery
  $('.popup-youtube, .popup-vimeo, .popup-video, .popup-gmaps').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
        '<div class="mfp-close"></div>'+
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
      '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&showinfo=0&rel=0'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1&title=0&byline=0&portrait=0'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
      },
      srcAction: 'iframe_src',
    },
    callbacks: {
      markupParse: function(template, values, item) {
        values.title = item.el.attr('title');
      }
    },
  gallery:{enabled:true},
  });

  // Magnific Popup by Dmitry Semenov for image gallery
  $('.gallery-link').on('click', function () {
    $(this).next().magnificPopup('open');
  });

  $('.gallery').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true
      },
      fixedContentPos: false
    });
  });

  // Magnific Popup by Dmitry Semenov for modal
  $('#open-popup').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function () {
      }
    }
  });

}(jQuery));
