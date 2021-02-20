            // Wait for document to load
            document.addEventListener("DOMContentLoaded", function(event) {
                document.documentElement.setAttribute("data-theme", "light");
            
                // Get our button switcher
                var themeSwitcher = document.getElementById("theme-switcher");
            
                // When our button gets clicked
                themeSwitcher.onclick = function() {
                  // Get the current selected theme, on the first run
                  // it should be `light`
                  var currentTheme = document.documentElement.getAttribute("data-theme");
            
                  // Switch between `dark` and `light`
                  var switchToTheme = currentTheme === "dark" ? "light" : "dark"
            
                  // Set our currenet theme to the new one
                  document.documentElement.setAttribute("data-theme", switchToTheme);
                }
              });
  
              $(document).ready(function() { 
                  $('.color-switch').click(function(){
                      var src = $(".post-like").attr('src');
  
                      if(src=="assets/make-dark.png")
                      $(".post-like").attr('src',"assets/make-light.png");
                      else
                      $(".post-like").attr('src',"assets/make-dark.png");
                  });
              });
  
  
              //Get the button
              var mybutton = document.getElementById("myBtn");
  
              // When the user scrolls down 20px from the top of the document, show the button
              window.onscroll = function() {scrollFunction()};
  
              function scrollFunction() {
              if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                  mybutton.style.display = "block";
              } else {
                  mybutton.style.display = "none";
              }
              }
  
              // When the user clicks on the button, scroll to the top of the document
              function topFunction() {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
              }