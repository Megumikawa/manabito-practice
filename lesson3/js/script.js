$(function(){
  'use strict';

  $('#slider ul').bxSlider();

  $('#pagetop').on('click',function(){
    $('html, body').animate({scrollTop:0},500);
  });
});
