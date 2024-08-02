window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        var targetSection = document.querySelector(this.getAttribute('href'));
        
        // If the clicked link is the Home link, update the inner HTML
        if (this.getAttribute('href') === '#home') {
            targetSection.innerHTML = `
                <h1>Home Section</h1>
                <p>The "Home" section of a Word document contains commands for formatting and editing text, such as Cut, Copy, Paste, and Format Painter in the Clipboard group. The Font group includes options to change the font style, size, bold, italic, underline, strikethrough, subscript, and superscript. The Paragraph group provides tools for alignment, bullet points, numbering, and indentation.</p>
            `;
        }
        
        if (this.getAttribute('href') === '#about') {
            targetSection.innerHTML = `
                <h1>About Section</h1>
                <p>Welcome to our innovative platform, where creativity meets technology. We offer cutting-edge solutions to empower your digital journey. Our mission is to deliver exceptional user experiences through seamless design and functionality. Join us as we revolutionize the digital landscape, turning your ideas into reality. Let's build something extraordinary together.

</p>
            `;
        }

        if (this.getAttribute('href') === '#services') {
            targetSection.innerHTML = `
                <h1>Services Section</h1>
                <p>We provide a range of digital services tailored to your needs, including web development, mobile app creation, and custom software solutions. Our expert team ensures top-notch design, seamless functionality, and user-centric experiences. Partner with us to transform your digital presence and achieve your business goals with innovative, reliable, and efficient solutions.

</p>
            `;
        }

        if (this.getAttribute('href') === '#contact') {
            targetSection.innerHTML = `
                <h1>Contact Section</h1>
                <p>Get in touch with us! For inquiries, support, or collaboration, reach out via email at contact@ourcompany.com or call us at (123) 456-7890. Follow us on social media for updates. We're here to assist you and look forward to connecting with you</p>
            `;
        }
        // Smooth scrolling to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    anchor.addEventListener('mouseover', function() {
        var sectionId = this.getAttribute('data-section');
        var section = document.getElementById(sectionId);
        section.classList.add('hovered');
    });

    anchor.addEventListener('mouseout', function() {
        var sectionId = this.getAttribute('data-section');
        var section = document.getElementById(sectionId);
        section.classList.remove('hovered');
    });
});