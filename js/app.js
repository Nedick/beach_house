$(document).foundation();
$(function () {
  var locationArray = location.pathname.split('/');
  $('nav section.top-bar-section a[href="/' + locationArray[locationArray.length - 1]).parent().addClass('active');
});
