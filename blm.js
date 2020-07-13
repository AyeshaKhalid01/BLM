const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Black Lives Matter!"];
const typingDelay = 100;
const erasingDelay = 0;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
 if (charIndex < textArray[textArrayIndex].length) {
   if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
   typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
   charIndex++;
   setTimeout(type, typingDelay);
 } 

}


document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
 if(textArray.length) setTimeout(type, newTextDelay + 250);
});