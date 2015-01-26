$(document).foundation();
$(function () {
  setTimeout(function() {
    $("body > div:first-child").remove();
  }, 10);
  var locationArray = location.pathname.split('/');
  console.log(locationArray[locationArray.length - 1]);
  $('nav section.top-bar-section a[href^="' + locationArray[locationArray.length - 1]).parent().addClass('active');
});
