$(function(){
  'use strict';

  // let menuSpeed = 1000;
  const MENUSPEED = 300;

  $('#top-slider').bxSlider({
    auto: true
  });

  $('#pagetop').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
  });

  let menuContents = $('#js-menu-contents');

  // if(menuContents.length > 0) {
    $('#js-btn-menu').on('click',function(){
      //$('#js-container').addClass('class名');
      if ($(this).hasClass('open') ===true) {
        $(this).removeClass('open');
        $('html').css('overflow','');
        menuContents.fadeOut(MENUSPEED);
      } else {
        $(this).addClass('open');
        $('html').css('overflow','hidden');
        menuContents.fadeIn(MENUSPEED);
      }
    });

    $('.js-btn-close').on('click',function(){
      $('#js-btn-menu').removeClass('open');
      $('html').css('overflow','');
      menuContents.fadeOut(MENUSPEED);
    });
  // }

});
