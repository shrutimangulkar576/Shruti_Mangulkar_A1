const text = "Frontend Developer";
let i = 0;

function typingEffect(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect,100);
    }
}

typingEffect();

function scrollToContact(){
    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    });
}
const text = ["Web Developer", "Web Technology Student", "Frontend Learner"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < text[index].length) {
        document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        document.getElementById("typing").innerHTML = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index++;
        if (index >= text.length) index = 0;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();