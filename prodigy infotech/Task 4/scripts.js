 
// Create header and navigation
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const navItems = ['Home', 'About', 'Projects', 'Contact'];

navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${item.toLowerCase()}`;
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);
document.body.appendChild(header);

// Create sections
const sections = [
    {
        id: 'home',
        title: 'Welcome to My Portfolio',
        content: 'Your one-stop destination to know all about my work and projects.'
    },
    {
        id: 'about',
        title: 'About Me',
        content: 'Introduce yourself. Highlight your skills, experience, and background.'
    },
    {
        id: 'projects',
        title: 'My Projects',
        content: '<div class="project"><h3>Project 1</h3><p>Description of Project 1.</p></div><div class="project"><h3>Project 2</h3><p>Description of Project 2.</p></div>'
    },
    {
        id: 'contact',
        title: 'Contact Me',
        content: '<form><label for="name">Name:</label><input type="text" id="name" name="name" required><label for="email">Email:</label><input type="email" id="email" name="email" required><label for="message">Message:</label><textarea id="message" name="message" required></textarea><button type="submit">Send</button></form>'
    }
];

sections.forEach(sectionData => {
    const section = document.createElement('section');
    section.id = sectionData.id;

    const h2 = document.createElement('h2');
    h2.textContent = sectionData.title;

    const content = document.createElement('div');
    content.innerHTML = sectionData.content;

    section.appendChild(h2);
    section.appendChild(content);
    document.body.appendChild(section);
});

// Create footer
const footer = document.createElement('footer');
footer.innerHTML = '&copy; 2024 My Portfolio';
document.body.appendChild(footer);

// Smooth Scroll Function
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully!');
    form.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Scroll-to-top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.backgroundColor = '#333';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.cursor = 'pointer';

document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
 