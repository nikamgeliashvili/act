$(".see-more").click(function () {
    $(".more-info-text").slideToggle();
});






// var name = $('#fname').val().length;
// if (name < 3) {
//   $("#fname").css('color','red');
//  }



 $('.review-section input,textarea').keyup(function() {

  if(this.value.length < 4){
    $(this).css('color','red')
  }
  else{
    $('.review-section input,textarea').css('color','black')
  }
});


