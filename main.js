let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
        const radios = document.querySelectorAll('input[name="explore"]');
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                console.log(`Selected option: ${radio.value}`);
            });
        });
        
    
    const links = document.querySelectorAll('.social-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                alert('You are being redirected to ' + link.textContent);
            });
        });
        document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent! Thank you for contacting us.');
        this.reset();
    })