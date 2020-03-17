$(function(){
  'use strict';

  // let menuSpeed = 1000;
  const MENUSPEED = 300;

  $('#top-slider').bxSlider({
    auto: true,
  });

  $('#pagetop').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
  });

  let menuContents = $('#js-menu-contents');

  // if(menuContents.length > 0) {
    $('#js-btn-menu').on('click',function(){
      menuContents.fadeIn(MENUSPEED);
    });
    $('.js-btn-close').on('click',function(){
      menuContents.fadeOut(MENUSPEED);
    });
  // }

});
