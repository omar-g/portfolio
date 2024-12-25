// Cursor follower
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-follower');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Typing effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.typing-effect');
    const originalText = titleElement.innerHTML;
    typeWriter(titleElement, originalText);
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').split(':')[1];
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-level').forEach(skill => {
    skill.style.width = '0%';
    observer.observe(skill);
});

// Add parallax effect to profile photo
window.addEventListener('scroll', () => {
    const profilePhoto = document.querySelector('.profile-photo');
    const scrolled = window.pageYOffset;
    profilePhoto.style.transform = `translateY(${scrolled * 0.1}px)`;
});

// Add random colors to floating items
document.querySelectorAll('.floating-items li').forEach(item => {
    const colors = ['#2ecc71', '#3498db', '#e74c3c', '#f1c40f', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    item.style.backgroundColor = randomColor;
    item.style.color = '#fff';
}); 