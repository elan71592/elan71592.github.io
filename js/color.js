$(document).ready(function() {
  // $('#download').mouseenter(function() {
  //   $('.download-button').css({
  //       transition : 'color 0.5s ease',
  //       color : 'white'
  //   });
  // });
  // $('#download').mouseleave(function() {
  //   $('.download-button').css({
  //       transition : 'color 0.5s ease',
  //       color : '#db4453'
  //   });
  // });

  $('.git').mouseenter(function() {
    $('.git').attr('src', 'imgs/github-small-red.png')
  });
  $('.git').mouseleave(function() {
    $('.git').attr('src', 'imgs/git.png')
  });

  $('.linked').mouseenter(function() {
    $('.linked').attr('src', 'imgs/linked-small-red.png')
  });
  $('.linked').mouseleave(function() {
    $('.linked').attr('src', 'imgs/linked-in-small.png')
  });

  $('.twitter').mouseenter(function() {
    $('.twitter').attr('src', 'imgs/twitter-small-red.png')
  });
  $('.twitter').mouseleave(function() {
    $('.twitter').attr('src', 'imgs/twitter-small.png')
  });
});