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
});


// javascript for when form is submitted

function myFunction() {
  alert("Your details have been submitted");
}


// added a event listener to change color as could not in html directly

document.getElementById("ems").addEventListener("mouseover", mouseOver);
document.getElementById("ems").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("ems").style.color = "blue";
  
}

function mouseOut() {
  document.getElementById("ems").style.color = "azure";
}

