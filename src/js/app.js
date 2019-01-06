import 'slick-carousel/slick/slick';
import $ from 'jquery';

$('.slick').slick({
  arrows: false,
});

let slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

document.querySelector('.header__menu').addEventListener('click', function() {
  slideout.toggle();
});
