document.addEventListener("DOMContentLoaded", function() {
    var texts = ["Hi, I'm Lydia", "Product Design", "UX UI Design", "Web Design", "Mobile Design", "Front-end Dev"];
    var textIndex = 0;
    var charIndex = 0;
    var speed = 100; // Speed of typing
    var backSpeed = 50; // Speed of backspacing
    var pauseBeforeDelete = 2000; // Pause before starting to backspace
    var pauseBeforeType = 500; // Pause before starting to type new text

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("typing").innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(backspace, pauseBeforeDelete);
        }
    }

    function backspace() {
        if (charIndex > 0) {
            document.getElementById("typing").innerHTML = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(backspace, backSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, pauseBeforeType);
        }
    }

    typeWriter();
});
