var mybutton = document.getElementById("myBtn");
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";

} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
            

document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "light");
            
  var themeSwitcher = document.getElementById("theme-switcher");

  themeSwitcher.onclick = function() {
      var currentValue = document.getElementById("post-photo").getAttribute('src');
      var image = document.getElementById("post-photo");
      if(currentValue == "assets/make-dark.png"){
          image.src = "assets/make-light.png";
          document.documentElement.setAttribute("data-theme", "dark");
          console.log("It is darker now!");
      } else{
          image.src = "assets/make-dark.png";
          document.documentElement.setAttribute("data-theme", "light");
          console.log("Sun is up!");
      }
  }
})


const menu = document.querySelector('.menu-button');

menu.addEventListener('click', function(){
    let clickCount = 1;
    if (clickCount == 1){
        menu.classList.toggle('is-active');
    }
    clickCount = 1;
});



