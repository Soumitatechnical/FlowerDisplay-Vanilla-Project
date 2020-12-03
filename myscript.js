

var sliding=document.getElementById('sliding');
var slides=sliding.getElementsByTagName('img');
let index=0;

function nextSlide () {

    slides[index].classList.remove('active');

    index=(index + 1) % slides.length;

    slides[index].classList.add('active');
    
}
function prevSlide () {

    slides[index].classList.remove('active');

    index=(index - 1 + slides.length) % slides.length;

    slides[index].classList.add('active');
    
}

var slidingText=document.getElementById('slidingText');
var slidestext=slidingText.getElementsByTagName('div');
let i=0;

function nextTextSlide () {

    slidestext[i].classList.remove('active');

    i=(i + 1) % slidestext.length;

    slidestext[i].classList.add('active');
    
}
function prevTextSlide () {

    slidestext[i].classList.remove('active');

    i=(i - 1 + slidestext.length) % slidestext.length;

    slidestext[i].classList.add('active');
    
}