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

// Part B


// Data object containing all the page information
const profileData = {
    name: "Rayyan Profile",
    description: "Skilled in front-end development...",
    about: {
        en: "I am skilled in front-end web development, with proficiency in creating modern, responsive, and user-friendly interfaces.I have experience working with technologies like HTML, CSS, JavaScript, and Flutter. My passion lies in building efficient, scalable web applications. I am always keen on learning new tools and technologies to stay updated in the ever-evolving tech landscape.",
        ar: "",
        ur: "",
        fr: ""
    },
    skills: {
        softSkills: ["Problem-Solving", "Leadership", "Adaptability"],
        hardSkills: ["C++", "Dart", "Python", "JavaScript"]
    },
    projects: [
        { name: "Snake Game", date: "March 2023" },
        { name: "Chess", date: "Dec 2023" },
        { name: "Food Delivery App", date: "April 2024" }
    ],
    achievements: [
        "Certification in Hackathon - 2023",
        "Certified in SEO and Digital Marketing - 2022"
    ],
    contact:[
        "Phone no: +92 3224279475",
        "Gmail: rayyann1497@gmail.com"
    ],
    socialMedia: [
        { platform: "Twitter", url: "https://twitter.com/TwitterDev", icon: "twitter" },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
        { platform: "GitHub", url: "https://github.com", icon: "github" },
        { platform: "Facebook", url: "https://facebook.com", icon: "facebook" }
    ]
};

// Function to populate sections
function populateSections() {
    // About Section
    document.getElementById('about').innerHTML = `
        <h2>About Me</h2>
        <p>${profileData.about.en}</p>
        <p lang="ar" dir="rtl">${profileData.about.ar}</p>
        <p lang="ur" dir="rtl">${profileData.about.ur}</p>
        <p>${profileData.about.fr}</p>
    `;

    // Skills Section
    const softSkills = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join("");
    const hardSkills = profileData.skills.hardSkills.map(skill => `<li>${skill}</li>`).join("");
    document.getElementById('skills').innerHTML = `
        <h2>Skills</h2>
        <div class="skills-container">
            <div class="soft-skills">
                <h3>Soft Skills</h3>
                <ul>${softSkills}</ul>
            </div>
            <div class="hard-skills">
                <h3>Hard Skills</h3>
                <ul>${hardSkills}</ul>
            </div>
        </div>
    `;

    // Projects Section
    const projectList = profileData.projects.map(project => `<li>${project.name} --- <span>${project.date}</span></li>`).join("");
    document.getElementById('projects').innerHTML = `
        <h2>Projects</h2>
        <ul>${projectList}</ul>
    `;

    // Achievements Section
    const achievementsList = profileData.achievements.map(achievement => `<li>${achievement}</li>`).join("");
    document.getElementById('achievements').innerHTML = `
        <h2>Achievements</h2>
        <ul>${achievementsList}</ul>
    `;

    // Contact Section
    const contactList = profileData.contact.map(contact => `<li>${contact}</li>`).join("");
    document.getElementById('contact').innerHTML = `
    <h2>Contact</h2>
    <ul>${contactList}</ul>
`;

    // Social Media Section
    const socialLinks = profileData.socialMedia.map(
        media => `<a href="${media.url}" target="_blank">
                    <img src="https://img.icons8.com/color/48/000000/${media.icon}.png" alt="${media.platform}" />
                  </a>`
    ).join("");
    document.getElementById('social-feed').innerHTML = `
        <h2>Social Media Feed</h2>
        <div class="social-icons">
            ${socialLinks}
        </div>
    `;
}

// Call the populate function on page load
window.onload = populateSections;
