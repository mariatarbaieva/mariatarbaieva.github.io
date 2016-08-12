(function($) {

  jQuery(document).ready(function() {

  //lightbox
  $(document).ready(function(){
    $('a').nivoLightbox();
  });
	//this code for the croll animation
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
      
      var target = this.hash,
      menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });

  });

  function prepareList() {
    $('.expList').find('li:has(ul)')
    .click( function(event) {
      if (this == event.target) {
        $(this).toggleClass('expanded');
        $(this).children('ul').toggle('medium');
      }
      return true;
    })
    .addClass('collapsed')
    .children('ul').hide();
  };

  $(document).ready( function() {
    prepareList();
  });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#menu-center ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  }

  


    //this code is for header
    jQuery(window).scroll(function() {
      var windowScrollPosTop = jQuery(window).scrollTop();

      // if(windowScrollPosTop >= 200) {
      //   jQuery(".logo").css({"margin-top": "20px", "margin-bottom": "20px"});
      //   jQuery(".navbar-default").css({"margin-top": "20px", "margin-bottom": "10"});
      // }
      // else{
      //   jQuery(".logo").css({"margin-top": "8px", "border-bottom": "0"});
      //    jQuery(".navbar-default").css({"margin-top": "0px", "margin-bottom": "0px"});

      // }
    });

  });

}) (jQuery);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
