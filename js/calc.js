'use strict';
(function (){

var mainField = $("#calc");

var inputField = $(".input-field");
var list = $(".list-labels");

/* стили для анимации раскрытия/скрытия */

var showListStyles = {
  'opacity' : '1',
  'visibility' : 'visible',
  'height' : '120px',
  'overflow-y' : 'scroll',
};

var hideListStyles = {
  'opacity' : '0',
  'visibility' : 'hidden',
  'height' : '0',
  'overflow-y' : 'scroll',
};

// $(document).ready(
//     function() {
//         $("#time-labels").niceScroll();
//     }
// );

/* функция дял анимирования раскрытия/скрытия */

  var listAnimate = function(label, ss, duration){
    label.animate(ss, duration);
  };

/* сотонизм */

$('#calc-btn').on('click', function(e){

  var calcPriceStyles = {
    'opacity' : '1',
  }

  $('.calculate__field').animate(calcPriceStyles, 300);
});

mainField.on('click', function(e){
 

    if(e.target.tagName == 'LI') {
      e.target.parentElement.parentElement.querySelector('.input-field__title--value').textContent = e.target.textContent;
      e.target.parentElement.parentElement.querySelector('.input-field__title').textContent = 
        e.target.parentElement.parentElement.querySelector('.input-field__title--hidden').textContent;

        if(e.target.parentElement.id == 'time-labels') {

          console.log($('#service-type .input-field__title--value').html());

          if($('#service-type .input-field__title--value').html() == 'Фото') {
            $('.price').html(e.target.dataset.photoPrice + ' &#8381;');
            $('.price--deleted').html(e.target.dataset.photoDelPrice + ' &#8381;');
          }

          if($('#service-type .input-field__title--value').html() == 'Фото/Видео') {
            $('.price').html(e.target.dataset.videoPrice + ' &#8381;');
            $('.price--deleted').html(e.target.dataset.videoDelPrice + ' &#8381;');
          }

          if($('#service-type .input-field__title--value').html() == 'Промышленная') {
            $('.price').html(e.target.dataset.industrialPrice + ' &#8381;');
            $('.price--deleted').html(e.target.dataset.industrialDelPrice + ' &#8381;');
          }




          var div = document.createElement(div);
          var p = document.createElement('p');
          var span = document.createElement('span');
          
          p.innerHTML = 'Скидка: ';
          span.innerHTML = '- ' + e.target.dataset.percent + '%';

          div.classList.add('percent-modal');
          div.appendChild(p);
          p.appendChild(span);

          if(e.target.parentElement.parentElement.querySelector('.percent-modal')){
            var suka = e.target.parentElement.parentElement.querySelector('.percent-modal');
            e.target.parentElement.parentElement.removeChild(suka);
          }

          e.target.parentElement.parentElement.appendChild(div);

        }
    };

    $('#calc-btn').on('click', function(){
      $('.price--deleted, .price').css({
          // 'opacity' : '0',
          'opacity' : '1',
      });

      if($('.price').is(':visible')){
        console.log('tatar');

        $('.calc-call-to-action').css({
          'height' : 'auto',
          'opacity' : '1',
        });

        // $('.calc-call-to-action').animate({
        //   height : 'auto',
        //   opacity : '1',
        // }, 500);
      }
        $('.main-abstraction').css({
          'height' : '275px',
        });
    });


    if(e.target.classList.contains('input-field')) {
    console.log('govno');

      if(($(e.target).find('.list-labels').height() == '0')) {

        listAnimate(mainField.find('.list-labels'),hideListStyles, 100);
        $('.input-field').css({
          'border-bottom-left-radius' : '10px',
          'border-bottom-right-radius' : '10px',
        });

        $(e.target).find('.list-labels').css('z-index', '10');
        $(e.target).css({
          'border-bottom-left-radius' : '0',
          'border-bottom-right-radius' : '0',
        });

        listAnimate($(e.target).find('.list-labels'),showListStyles, 200);
        $(e.target).find('.list-labels').css({
          'border-bottom-left-radius' : '10px',
          'border-bottom-right-radius' : '10px',
        });

      }


      else if (($(e.target).find('.list-labels').height() !== '0')) {

        $(e.target).find('.list-labels').css('z-index', '0');
        $(e.target).css({
          'border-bottom-left-radius' : '10px',
          'border-bottom-right-radius' : '10px',
        });
        listAnimate($(e.target).find('.list-labels'),hideListStyles, 100);

      } 

    }

    else {
      listAnimate($('.list-labels'),hideListStyles, 300);
      inputField.css({
          'border-bottom-left-radius' : '10px',
          'border-bottom-right-radius' : '10px',
        });
    }

});

// (function (){
//   var title = document.querySelector('.input-field__title');
//   var list = document.querySelector('.time-labels');
//   // var timePriceRatio = document.querySelector('.time-labels'); // коэффициент для итогового подсчета
//     if (list && title) {

//       list.addEventListener('click', function (e) {
//           if (e.target.tagName === 'LI') {
//             title.textContent = 'Выбранное время: ' + e.target.innerText;
//             // console.log(title.textContent);
//             // price.textContent = (parseInt(e.target.innerText) * 300).toString();
//           }
//       });
//     }
// }());
















})(); // конец