$(document).ready(function () {

  $(".text-click").click(function() {
    $("#flower").toggle();
    $('.text-click').toggle();
    $('.text-click-off').toggle();
  });

  $(".text-click-off").click(function() {
    $("#flower").toggle();
    $('.text-click').toggle();
    $('.text-click-off').toggle();
  });



  $('.fade-out-button').click(function () {
    $('#cricket').fadeOut(500);
  });

  $('.fade-in-button').click(function () {
    $('#cricket').fadeIn(500);
  });

  $('.fade-toggle-button').click(function () {
    $('#cricket').fadeToggle(500);
  });



  $('.slide-down-button').click(function () {
    $('#veggies').slideDown(500);
  });

  $('.slide-up-button').click(function () {
    $('#veggies').slideUp(500);
  });

  $('.slide-toggle-button').click(function () {
    $('#veggies').slideToggle(500);
  });



  $(".yellow-color").click(function(){
    $("body").addClass("body-yellow-class");
  });

  $(".green-color").click(function(){
    $("body").addClass("body-green-class");
  });

  $(".red-color").click(function(){
    $("body").addClass("body-red-class");
  });

});
