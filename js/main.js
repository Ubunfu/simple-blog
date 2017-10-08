$(function(){
  $('.data-image').on('click', function(){
    var message = $(this).attr('data-hidden-message');
    alert(message);
  });
});
