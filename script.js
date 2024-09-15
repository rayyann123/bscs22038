// Smooth Scroll 
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in 
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});


const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆ Top';
backToTopButton.id = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionID = this.getAttribute('href');
        document.querySelector(sectionID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//visual feedback
document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff6600';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = '#fff';
    });
});
