let hamburger = document.getElementById('check');
let nav = document.getElementById('nav');
let span1 = document.querySelector('.line1');
let span2 = document.querySelector('.line2');
let span3 = document.querySelector('.line3');

hamburger.addEventListener('click', function(){
    nav.classList.toggle("open");
    span1.classList.toggle("open");
    span2.classList.toggle("open");
    span3.classList.toggle("open");
});

