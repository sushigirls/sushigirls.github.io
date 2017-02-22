$(function(){
  $("#hello").click(function(){
      $(".show-images img").show();
  });

  var audioElm = $('#qwer').get(0);
  $(window).scroll(function(){
      var pageScroll = $(window).scrollTop();


    if(pageScroll >= $("#sexy").position().top) {
      audioElm.play();
      }

  });

});
