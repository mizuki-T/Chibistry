
var rest = '...';
function cutStringById(id, size) {
  var str = document.getElementById(id).innerHTML;
  if(str.length > size){
    document.getElementById(id).innerHTML = str.substring(0, size) + rest;
  }
}
function cutStringByTagNameAndClassName(tagName, className, size) {
  var elements = document.getElementsByTagName(tagName);
  for (i=0; i < elements.length; i++) {
    if (elements[i].getAttribute('class') == className ||
      elements[i].getAttribute('className') == className) {
      var str = elements[i].innerHTML;
      if(str.length > size){
        elements[i].innerHTML = str.substring(0, size) + rest;
      }
    }
  }
}