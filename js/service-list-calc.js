'use strict';
(function (){


var mainFieldS = $("#service-list-photo");
var mainFieldSVideo = $("#service-type-standart");
var mainFieldSIndustrial = $("#service-list-industrial");
var inputFieldS = $(".service__input-field");

var showListStylesS = {
  'opacity' : '1',
  'visibility' : 'visible',
  'height' : '120px',
};

var hideListStylesS = {
  'opacity' : '0',
  'visibility' : 'hidden',
  'height' : '0',
};


/* функция дял анимирования раскрытия/скрытия */

  var listAnimateS = function(label, ss, duration){
    label.animate(ss, duration);
  };


/* Сотонизм */
mainFieldS.on('click', function(e){

    if(e.target.tagName == 'LI') {
      e.target.parentElement.parentElement.querySelector('#service-list-photo .input-field__title').textContent = e.target.textContent;

      $('#service-list-photo .service__hour-price--price span').html($(e.target).attr('data-photo-price') + ' &#8381;');
    };


    if(e.target.classList.contains('service__input-field')) {

      if(($(e.target).find('.service__list-labels').height() == '0')) {
      	console.log('h is 0');
      	mainFieldS.find('.service__list-labels').css({ 'opacity' : '1', 'height' : '120px' });

        $(e.target).find('.service__list-labels').css('z-index', '10');
        $(e.target).css({
          'border-bottom-left-radius' : '0',
          'border-bottom-right-radius' : '0',
        });

        listAnimateS($(e.target).find('.service__list-labels'),showListStylesS, 200);
        $(e.target).find('.service__list-labels').css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });

      }


      else if (($(e.target).find('.service__list-labels').height() !== '0')) {

        $(e.target).find('.service__list-labels').css('z-index', '0');
        $(e.target).css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });
        listAnimateS($(e.target).find('.service__list-labels'),hideListStylesS, 100);
      } 

    }

    else {
      listAnimateS($('.service__list-labels'),hideListStylesS, 300);
      inputFieldS.css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });
    }

});


mainFieldSVideo.on('click', function(e){
    if(e.target.tagName == 'LI') {
      e.target.parentElement.parentElement.querySelector('#service-type-standart .input-field__title').textContent = e.target.textContent;

      $('#service-type-standart .service__hour-price--price span').html($(e.target).attr('data-video-price') + ' &#8381;');

    	if($('#service-type-standart .input-field__title').html() !== '1 час') {
			$('.share').animate({'opacity' : '1'}, 300);
		}
    };


    if(e.target.classList.contains('service__input-field')) {

      if(($(e.target).find('.service__list-labels').height() == '0')) {
      	console.log('h is 0');
      	mainFieldSVideo.find('.service__list-labels').css({ 'opacity' : '1', 'height' : '120px' });

        $(e.target).find('.service__list-labels').css('z-index', '10');
        $(e.target).css({
          'border-bottom-left-radius' : '0',
          'border-bottom-right-radius' : '0',
        });

        listAnimateS($(e.target).find('.service__list-labels'),showListStylesS, 200);
        $(e.target).find('.service__list-labels').css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });

      }


      else if (($(e.target).find('.service__list-labels').height() !== '0')) {

        $(e.target).find('.service__list-labels').css('z-index', '0');
        $(e.target).css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });
        listAnimateS($(e.target).find('.service__list-labels'),hideListStylesS, 100);
      } 

    }

    else {
      listAnimateS($('.service__list-labels'),hideListStylesS, 300);
      inputFieldS.css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });
    }

});

mainFieldSIndustrial.on('click', function(e){
    if(e.target.tagName == 'LI') {
      e.target.parentElement.parentElement.querySelector('#service-list-industrial .input-field__title').textContent = e.target.textContent;

      $('#service-list-industrial .service__hour-price--price span').html($(e.target).attr('data-industrial-price') + ' &#8381;');

      if($('#service-list-industrial .input-field__title').html() !== '1 час') {
      $('.share').animate({'opacity' : '1'}, 300);
    }
    };


    if(e.target.classList.contains('service__input-field')) {

      if(($(e.target).find('.service__list-labels').height() == '0')) {
        console.log('h is 0');
        mainFieldSIndustrial.find('.service__list-labels').css({ 'opacity' : '1', 'height' : '120px' });

        $(e.target).find('.service__list-labels').css('z-index', '10');
        $(e.target).css({
          'border-bottom-left-radius' : '0',
          'border-bottom-right-radius' : '0',
        });

        listAnimateS($(e.target).find('.service__list-labels'),showListStylesS, 200);
        $(e.target).find('.service__list-labels').css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });

      }


      else if (($(e.target).find('.service__list-labels').height() !== '0')) {

        $(e.target).find('.service__list-labels').css('z-index', '0');
        $(e.target).css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });
        listAnimateS($(e.target).find('.service__list-labels'),hideListStylesS, 100);
      } 

    }

    else {
      listAnimateS($('.service__list-labels'),hideListStylesS, 300);
      inputFieldS.css({
          'border-bottom-left-radius' : '5px',
          'border-bottom-right-radius' : '5px',
        });
    }

});

var list = $('.service-list__container');

var serviceType = $('.service-list-popup__service-type + span');
var serviceHours = $('.service-list-popup__service-hours + span');
var servicePrice = $('.service-list-popup__service-price + span');

list.on('click', addServiceInfo);
console.log(list);

function addServiceInfo(e){
	if(e.target.classList.contains('orderBtn')) {
		serviceType.html($(e.target).closest('.service-list-item').find('.service-list-item__title').html());
		serviceHours.html($(e.target).closest('.service-list-item__container').find('.input-field__title').html());
		servicePrice.html($(e.target).closest('.service-list-item__container').find('.service__hour-price--price span').html());

	}
}

})(); // конец