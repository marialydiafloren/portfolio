document.addEventListener("DOMContentLoaded", function() {
    var texts = ["Hi, I'm Lydia!", "Product Designer", "UX UI Designer", "Web Designer", "Mobile Designer", "Front-end Developer"];
    var textIndex = 0;
    var charIndex = 0;
    var speed = 35; // Speed of typing
    var backSpeed = 20; // Speed of backspacing
    var pauseBeforeDelete = 800; // Pause before starting to backspace
    var pauseBeforeType = 250; // Pause before starting to type new text

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


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.work__slider');
    const sliderWidth = slider.scrollWidth; // Get the total width of the slider
    const logos = slider.innerHTML;
    slider.innerHTML += logos; // Duplicate the logos

    // Adjust the animation distance to cover both sets of logos
    slider.style.animation = `slide ${sliderWidth / 100}s linear infinite`;
});