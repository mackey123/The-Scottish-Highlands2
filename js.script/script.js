// Date and time button for under Gallery
function dateFunc(thatBtn) {
  return thatBtn.innerHTML = Date();
}


// time js for under about section 
function time() {
  
  let currentdate = new Date(); 
  let timenow = + currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();
    document.getElementById("datebtn").innerHTML = timenow;
  
  }


// loader styles for all pages 

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
   setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})


// javascript for when form is submitted

function myFunction() {
  alert("Your details have been submitted");
}

// // Gallery script
// var slideIndex = 1;
// showSlides(slideIndex);

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function showSlides(n) {

//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");

//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[slideIndex-1].style.display = "block";

//   dots[slideIndex-1].className += " active";
// }


// added a event listener to change color as could not in html directly

document.getElementById("ems").addEventListener("mouseover", mouseOver);
document.getElementById("ems").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("ems").style.color = "blue";
  
}

function mouseOut() {
  document.getElementById("ems").style.color = "azure";
}

