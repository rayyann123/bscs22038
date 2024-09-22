// app.js

// Wait for the DOM to load before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    populateNavbar(siteData.navbar);
    populateSections(siteData.sections);
    populateFooter(siteData.footer);
    initializeInteractivity();
});

/**
 * Function to create navigation bar items.
 * @param {Array} navbarData - Array of navigation items.
 */
function populateNavbar(navbarData) {
    const navbar = document.getElementById('navbar');
    navbarData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.name;
        a.setAttribute('aria-label', item.name);
        li.appendChild(a);
        navbar.appendChild(li);
    });
}

/**
 * Function to populate all sections based on the data object.
 * @param {Object} sectionsData - Object containing data for each section.
 */
function populateSections(sectionsData) {
    for (const [sectionID, sectionContent] of Object.entries(sectionsData)) {
        switch(sectionID) {
            case 'home':
                populateHome(sectionContent);
                break;
            case 'about':
                populateAbout(sectionContent);
                break;
            case 'skills':
                populateSkills(sectionContent);
                break;
            case 'video':
                populateVideo(sectionContent);
                break;
            case 'socialFeed':
                populateSocialFeed(sectionContent);
                break;
            case 'projects':
                populateProjects(sectionContent);
                break;
            case 'achievements':
                populateAchievements(sectionContent);
                break;
            case 'contact':
                populateContact(sectionContent);
                break;
            default:
                console.warn(`No population function for section: ${sectionID}`);
        }
    }
}

/**
 * Function to populate the Home section.
 * @param {Object} sectionData - Data for the Home section.
 */
function populateHome(sectionData) {
    const homeSection = document.getElementById('home');

    const h1 = document.createElement('h1');
    h1.textContent = sectionData.title;

    const p = document.createElement('p');
    p.textContent = sectionData.content;

    const img = document.createElement('img');
    img.src = sectionData.image;
    img.alt = 'Home Image';
    img.classList.add('responsive-image'); // Add a class for styling

    homeSection.appendChild(h1);
    homeSection.appendChild(p);
    homeSection.appendChild(img);
}

/**
 * Function to populate the About Me section.
 * @param {Object} sectionData - Data for the About Me section.
 */
function populateAbout(sectionData) {
    const aboutSection = document.getElementById('about');

    const h2 = document.createElement('h2');
    h2.textContent = sectionData.title;

    aboutSection.appendChild(h2);

    sectionData.paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph.text;
        p.setAttribute('lang', paragraph.lang);
        if (paragraph.dir) {
            p.setAttribute('dir', paragraph.dir);
        }
        aboutSection.appendChild(p);
    });

    const img = document.createElement('img');
    img.src = sectionData.image;
    img.alt = 'About Me Image';
    img.classList.add('responsive-image'); // Add a class for styling

    aboutSection.appendChild(img);
}

/**
 * Function to populate the Skills section.
 * @param {Object} sectionData - Data for the Skills section.
 */
function populateSkills(sectionData) {
    const skillsSection = document.getElementById('skills');

    const h2 = document.createElement('h2');
    h2.textContent = sectionData.title;

    skillsSection.appendChild(h2);

    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('skills-container');

    sectionData.categories.forEach(category => {
        const div = document.createElement('div');
        div.classList.add('skills-category');

        const h3 = document.createElement('h3');
        h3.textContent = category.name;

        const ul = document.createElement('ul');
        category.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            ul.appendChild(li);
        });

        div.appendChild(h3);
        div.appendChild(ul);
        skillsContainer.appendChild(div);
    });

    skillsSection.appendChild(skillsContainer);
}

/**
 * Function to populate the Video section.
 * @param {Object} sectionData - Data for the Video section.
 */
function populateVideo(sectionData) {
    const videoSection = document.getElementById('video');

    const h2 = document.createElement('h2');
    h2.textContent = sectionData.title;

    const iframe = document.createElement('iframe');
    iframe.width = sectionData.width;
    iframe.height = sectionData.height;
    iframe.src = sectionData.embedUrl;
    iframe.title = 'Introduction Video';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoSection.appendChild(h2);
    videoSection.appendChild(iframe);
}

/**
 * Function to populate the Social Media Feed section.
 * @param {Object} sectionData - Data for the Social Media Feed section.
 */
function populateSocialFeed(sectionData) {
    const socialFeedSection = document.getElementById('social-feed');

    const h2 = document.createElement('h2');
    h2.textContent = sectionData.title;

    const socialIconsDiv = document.createElement('div');
    socialIconsDiv.classList.add('social-icons');

    sectionData.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.title = link.platform;

        const img = document.createElement('img');
        img.src = link.icon;
        img.alt = `${link.platform} Icon`;
        img.classList.add('social-icon');

        a.appendChild(img);
        socialIconsDiv.appendChild(a);
    });

    socialFeedSection.appendChild(h2);
    socialFeedSection.appendChild(socialIconsDiv);
}

/**
 * Function to populate the Projects section.
 * @param {Object} sectionData - Data for the Projects section.
 */
function populateProjects(sectionData) {
    const projectsSection = document.getElementById('projects');

    const h2 = document.createElement('h2');
    h2.textContent = sectionData.title;

    const ul = document.createElement('ul');
    sectionData.list.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.name} --- `;
        const span = document.createElement('span');
        span.textContent = project.date;
        li.appendChild(span);
        ul.appendChild(li);
    });

    projectsSection.appendChild(h2);
    projectsSection.appendChild(ul);
}

/**
 * Function to populate the Achievements section.
 * @param {Object} sectionData - Data for the Achievements section.
 */
function populateAchievements(sectionData) {
    const achievementsSection = document.getElementById('achievements');

    const h2 = document.createElement('h2');
    h2.textContent = sectionData.title;

    const ul = document.createElement('ul');
    sectionData.list.forEach(achievement => {
        const li = document.createElement('li');
        li.textContent = achievement;
        ul.appendChild(li);
    });

    achievementsSection.appendChild(h2);
    achievementsSection.appendChild(ul);
}

/**
 * Function to populate the Contact section with a form.
 * @param {Object} sectionData - Data for the Contact section.
 */
function populateContact(sectionData) {
    const contactSection = document.getElementById('contact');

    const h2 = document.createElement('h2');
    h2.textContent = sectionData.title;

    const form = document.createElement('form');
    form.action = sectionData.formAction;
    form.method = sectionData.formMethod;
    form.id = 'contact-form';

    sectionData.fields.forEach(field => {
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;

        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }

        input.id = field.id;
        input.name = field.name;
        input.required = field.required;

        form.appendChild(label);
        form.appendChild(input);
    });

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = sectionData.submitButton.text;

    form.appendChild(button);

    contactSection.appendChild(h2);
    contactSection.appendChild(form);

    // Add event listener for form submission
    form.addEventListener('submit', validateForm);
}

/**
 * Function to populate the Footer.
 * @param {Object} footerData - Data for the footer.
 */
function populateFooter(footerData) {
    const footerText = document.getElementById('footer-text');
    footerText.textContent = footerData.text;

    const socialLinks = document.getElementById('social-links');
    footerData.socialLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.className = link.icon;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.title = link.platform;
        li.appendChild(a);
        socialLinks.appendChild(li);
    });
}

/**
 * Function to initialize all interactive features.
 */
function initializeInteractivity() {
    // Smooth Scroll
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in on Scroll
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

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
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

    // Visual Feedback on Navigation Links
    document.querySelectorAll('nav a').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#ff6600';
        });
    
        item.addEventListener('mouseout', () => {
            item.style.color = '#fff';
        });
    });
}

/**
 * Function to validate the contact form.
 * @param {Event} e - The form submission event.
 */
function validateForm(e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
    }

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If validation passes, allow form submission
    alert("Thank you for contacting us, " + name + "!");
    document.getElementById('contact-form').submit();
}
