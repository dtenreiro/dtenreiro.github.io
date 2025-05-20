document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Don't prevent default for email links
            if (!this.classList.contains('email-link')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Enhanced email handling with better obfuscation
    const emailLinks = document.querySelectorAll('.email-link');
    if (emailLinks.length > 0) {
        // Email components encoded in base64
        const encodedUser = 'ZHRvcGVuaW5ib3g='; // dtopeninbox
        const encodedDomain = 'Z21haWwuY29t'; // gmail.com
        
        const decodeEmail = () => {
            try {
                const user = atob(encodedUser);
                const domain = atob(encodedDomain);
                return `${user}@${domain}`;
            } catch (e) {
                console.error('Error decoding email components');
                return '';
            }
        };

        emailLinks.forEach(link => {
            const email = decodeEmail();
            if (email) {
                // Set the href attribute with mailto:
                link.href = `mailto:${email}`;
                
                // Add click event listener
                link.addEventListener('click', (e) => {
                    // Track the click if analytics is available
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'click', {
                            'event_category': 'Email',
                            'event_label': 'Contact Link Clicked'
                        });
                    }
                });
            }
        });
    }

    // Add animation to sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
