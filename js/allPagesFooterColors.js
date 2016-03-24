$(document).ready(function() {
  $('.git').mouseenter(function() {
    $('.git').attr('src', '../imgs/git-teal.png')
  });
  $('.git').mouseleave(function() {
    $('.git').attr('src', '../imgs/git.png')
  });

  $('.linked').mouseenter(function() {
    $('.linked').attr('src', '../imgs/linkedin-teal.png')
  });
  $('.linked').mouseleave(function() {
    $('.linked').attr('src', '../imgs/social-linkedin-footer.png')
  });

  $('.twitter').mouseenter(function() {
    $('.twitter').attr('src', '../imgs/twitter-teal.png')
  });
  $('.twitter').mouseleave(function() {
    $('.twitter').attr('src', '../imgs/social-twitter-footer.png')
  });

  $('.fb-link').mouseenter(function() {
    $('.fb-link').attr('src', '../imgs/fb-teal.png')
  });
  $('.fb-link').mouseleave(function() {
    $('.fb-link').attr('src', '../imgs/social-fb-footer.png')
  });

  $('.insta-link').mouseenter(function() {
    $('.insta-link').attr('src', '../imgs/insta-teal.png')
  });
  $('.insta-link').mouseleave(function() {
    $('.insta-link').attr('src', '../imgs/social-insta-footer.png')
  });
});