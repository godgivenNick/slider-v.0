'use strict';
	
$(document).ready(function(){
	$(".nav-menu__list").on("click","a", function (event) {

		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за ____ мс	
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
