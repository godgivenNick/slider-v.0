(function () {

'use strict';

var phone = $('form input[name="phone"]').val();
var name = $('form input[name="name"]').val();

$('#popup-callback-form').on('click', function(){
  $(this).addClass('_success');
});

$('#service-list-popup-form').on('click', function(){
  $(this).addClass('_success');
});


$('#popup-callback-form').on('submit', function(e){
  e.preventDefault();

  $.ajax({
    type: 'POST',
    url: './main-form.php',
    data: $(this).serialize(),
    success: function(data) {

      if($('#callback-form-submit').hasClass('_success')){

        $('.popup-callback').css('display','none');
        $('.popup-callback--succes').fadeIn();
      }
    }
  })
});

$('#service-list-popup-form').on('submit', function(e){
  e.preventDefault();

  $.ajax({
    type: 'POST',
    url: './main-form.php',
    data: $(this).serialize(),
    success: function(data) {

      if($('#service-list-popup-form').hasClass('_success')){

        $('.service-list-popup').css('display','none');
        $('.service-list-popup--succes').fadeIn();
      }
    }
  })
});






}());
