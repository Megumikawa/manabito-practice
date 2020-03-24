$(function(){
  'use strict';

  // let menuSpeed = 1000;
  const MENUSPEED = 300;

  $('#top_slider').bxSlider({
    // maxSlides: 3,
    // minSlides: 1,
    // slideMargin: 1000,
    // moveSlides: 1
  });

  $('#pagetop').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
  });

  let menuContents = $('#js_menu_contents');

  // if(menuContents.length > 0) {
    $('#js_btn_menu').on('click',function(){
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

    $('.js_btn_close').on('click',function(){
      $('#js_btn_menu').removeClass('open');
      $('html').css('overflow','');
      menuContents.fadeOut(MENUSPEED);
    });
  // }

});
