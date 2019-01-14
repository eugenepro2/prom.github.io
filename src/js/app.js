import 'slick-carousel/slick/slick';
import $ from 'jquery';

$('.slick').slick({
  arrows: false,
});


function InitSlideout() {
  var BUTTON_SELECTOR = '[data-toggle-mobile-menu]';

  var slideout = new Slideout({
    'panel':     document.getElementById('panel'),
    'menu':      document.getElementById('menu'),
    'side':      'left',
    'padding':   256,
    'tolerance': 70,
    'touch':     false
  });

  $(BUTTON_SELECTOR).on('click', function() {
    slideout.toggle();
  });

  $(window).on('resize', function() { 
    slideout.close(); 
  });

  slideout.on('close', function() {
    $(BUTTON_SELECTOR).addClass('is-closing');
    $(BUTTON_SELECTOR).removeClass('is-active');
  });

  slideout.on('open', function() {
    $(BUTTON_SELECTOR).removeClass('is-closing');
    $(BUTTON_SELECTOR).addClass('is-active');
  });
}

InitSlideout();
