'use strict';
(function () {

var mainCalcButton = $('#calc-btn');
var mainCalcServiceType = $('#calc-chosen-type');
var mainCalcServiceTime = $('#calc-chosen-time');
var mainCalcServicePrice = $('#calc-chosen-price');
var mainCalcServicePercent = $('#calc-chosen-percent');


mainCalcButton.on('click', getInfo);
function getInfo(e){

	mainCalcServiceType.val($('#service-type .input-field__title--value').html());
	console.log(mainCalcServiceType.val());

	mainCalcServiceTime.val($('#time .input-field__title--value').html());
	console.log(mainCalcServiceTime.val());

	mainCalcServicePrice.val( $('.calculate .price').html().replace(/\D/g,'') + ' руб' );
	console.log(mainCalcServicePrice.val());

	mainCalcServicePercent.val( 'Скидка клиента: ' + $('#time .percent-modal span').html().replace(/\D/g,'') + ' %' );
	console.log(mainCalcServicePercent.val());

};


})(); // the end