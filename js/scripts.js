var mybutton = document.getElementById("myBtn");
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
      var deneme = document.getElementById("post-photo").getAttribute('src');
      var image = document.getElementById("post-photo");
      if(deneme == "assets/make-dark.png"){
          image.src = "assets/make-light.png";
          document.documentElement.setAttribute("data-theme", "dark");
      } else{
          image.src = "assets/make-dark.png";
          document.documentElement.setAttribute("data-theme", "light");
      }
  }
})