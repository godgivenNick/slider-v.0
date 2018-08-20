
var callbackField = Array.from(document.querySelectorAll('.popup-callback__field'));


console.log(callbackField);
callbackField.forEach(function(elem) {
  console.log(elem.children[0]);
  elem.children[0].addEventListener('change', checkValue);
})



function checkValue(e) {
  if(e.target.value) {
    e.target.parentNode.classList.add('label--filled');
  } else {
    e.target.parentNode.classList.remove('label--filled');
  }
}