let storyOpening=  document.querySelector('.story-opening');
let oneClose =  document.querySelector('.option-one-end');

let ronaldoButton= document.querySelector('.option-one');
let choice2Section = document.querySelector('.option-one-screen');
ronaldoButton.onclick = function() {
    choice2Section.style.display = 'block';    
    storyOpening.style.display = 'none';
    oneClose.style.display = 'block';    
};

let messibutton= document.querySelector('.option-two');
let choice1Section = document.querySelector('.option-two-screen');
let twoClose =  document.querySelector('.option-two-end');
messibutton.onclick = function() {
        choice1Section.style.display = 'block';
        storyOpening.style.display = 'none';
        twoClose.style.display = 'block';    
};

let body=document.querySelector("body");
body.onkeydown=function(){
body.style.backgroundColor="cyan";
};
