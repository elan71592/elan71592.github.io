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

  $('.like-link').click(function( event ) {
    event.preventDefault();
    if($('.answer').hasClass('active')) {
      $('.answer').removeClass('active')
      $('.like').addClass('active')
    } else {
      $('.like').addClass('active')
    };
  });

  $('.wild-link').click(function( event ) {
    event.preventDefault();
    if($('.answer').hasClass('active')) {
      $('.answer').removeClass('active')
      $('.wild').addClass('active')
    } else {
      $('.wild').addClass('active')
    };
  });

  $('.create-database-link').click(function( event ) {
    event.preventDefault();
    if($('.answer').hasClass('active')) {
      $('.answer').removeClass('active')
      $('.create-database').addClass('active')
    } else {
      $('.create-database').addClass('active')
    };
  });


});