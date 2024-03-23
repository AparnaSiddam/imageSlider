const slides = document.querySelectorAll('.slider');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const dots = document.querySelectorAll('.dot');
let current = 0;

function reset(){
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
}


function defaultSlide(){
    reset();
    slides[0].style.display = 'block';
}

prev.addEventListener('click', function(e){
   if(current === 0){
       current = slides.length;
   }
   prevSlide();
});

function prevSlide(){
    reset();
    slides[current - 1].style.display = 'block';
    current--;
}

next.addEventListener('click', function(e){
    if(current === slides.length - 1){
        current = -1;
    }
    nextSlide();
});

function nextSlide(){
    reset();
    slides[current + 1].style.display = 'block';
    current++;
}

defaultSlide();

    for(let i = 0; i < dots.length; i++){
    
        dots[i].addEventListener('click', function(e){
    
          reset();
          slides[i].style.display = 'block';
           });
    
    }

