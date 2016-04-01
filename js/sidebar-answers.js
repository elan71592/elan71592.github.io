$(document).ready(function() {
  $('.select-link').click(function( event ) {
    event.preventDefault();
    if($('.answer').hasClass('active')) {
      $('.answer').removeClass('active')
      $('.select').addClass('active')
    } else {
      $('.select').addClass('active')
    };
  });

  $('.where-link').click(function( event ) {
    event.preventDefault();
    if($('.answer').hasClass('active')) {
      $('.answer').removeClass('active')
      $('.where').addClass('active')
    } else {
      $('.where').addClass('active')
    };
  });

  $('.andor-link').click(function( event ) {
    event.preventDefault();
    if($('.answer').hasClass('active')) {
      $('.answer').removeClass('active')
      $('.andor').addClass('active')
    } else {
      $('.andor').addClass('active')
    };
  });

  $('.orderby-link').click(function( event ) {
    event.preventDefault();
    if($('.answer').hasClass('active')) {
      $('.answer').removeClass('active')
      $('.order-by').addClass('active')
    } else {
      $('.order-by').addClass('active')
    };
  });

  $('.update-link').click(function( event ) {
    event.preventDefault();
    if($('.answer').hasClass('active')) {
      $('.answer').removeClass('active')
      $('.update').addClass('active')
    } else {
      $('.update').addClass('active')
    };
  });


});