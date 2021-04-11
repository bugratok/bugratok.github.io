let hamburger = document.getElementById('check');
let nav = document.getElementById('nav');
let span1 = document.querySelector('.line1');
let span2 = document.querySelector('.line2');
let span3 = document.querySelector('.line3');

hamburger.addEventListener('click', navbarBtn);


let main = document.getElementById('main');

main.addEventListener('click', function () { 
    if (nav.classList.contains('open')) {
        nav.classList.remove("open");
        span1.classList.remove("open");
        span2.classList.remove("open");
        span3.classList.remove("open");
    }
 });


function navbarBtn(){
    nav.classList.toggle("open");
    span1.classList.toggle("open");
    span2.classList.toggle("open");
    span3.classList.toggle("open");
}

