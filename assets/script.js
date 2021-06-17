
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


// Next/previous button controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//  image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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



// map styles

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);




// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);



// document.getElementById("em").onmouseover = function() {mouseOver()};
// document.getElementById("em").onmouseout = function() {mouseOut()};

// function mouseOver() {
//   document.getElementById("em").style.color = "blue";
// }

// function mouseOut() {
//   document.getElementById("em").style.color = "azure";
// }


// added a event listener to change color as couldnt in html directly

document.getElementById("ems").addEventListener("mouseover", mouseOver);
document.getElementById("ems").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("ems").style.color = "blue";
  
}

function mouseOut() {
  document.getElementById("ems").style.color = "azure";
}