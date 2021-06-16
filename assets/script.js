
// adapted from CSS ticks (J-Query)

// $("#slideshow > div:gt(0)").hide();
// setInterval(function() { 
//   $('#slideshow > div:first')
//   .fadeOut(1000)
//   .next()
//   .fadeIn(1000)
//   .end()
//   .appendTo('#slideshow');
// }, 3000);





// Gallery script
var slideIndex = 1;
showSlides(slideIndex);

//  image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


// Next/previous button controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot") ;
  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none" ;
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// javascript for when form is submitted

function myFunction() {
  alert("Your details have been submitted");
}