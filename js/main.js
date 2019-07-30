$(document).ready(function() {
  //animate scroll
  AOS.init();

  //animate go to
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 70
        }, 1000);
    }
  });

  //header shadow
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('newClass');
    } else {
       $('#header').removeClass('newClass');
    }
  });

  //loader
  $(window).load(function() {
    $(".loader").delay(500).fadeOut("slow");
    $("#overlayer").delay(500).fadeOut("slow");
  })

  //hamburger menu
  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  

  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');


  $('.validate-form').on('submit',function(){
      var check = true;

      if($(name).val().trim() == ''){
          showValidate(name);
          check=false;
      }


      if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
          showValidate(email);
          check=false;
      }

      return check;
  });


  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
          hideValidate(this);
      });
  });

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
});