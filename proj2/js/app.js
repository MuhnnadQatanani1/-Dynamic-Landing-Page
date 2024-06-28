// Store sections in a variable
const sections = document.querySelectorAll('section');
const navMenu = document.getElementById('navbar__list');

// Build the navigation menu dynamically
sections.forEach(section => {
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navMenu.appendChild(navItem);
});

// Function to make sections active
const makeActive = () => {
    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add('active');
            document.querySelector(`a[data-nav=${section.id}]`).classList.add('active');
        } else {
            section.classList.remove('active');
            document.querySelector(`a[data-nav=${section.id}]`).classList.remove('active');
        }
    });
};

// Add scroll event listener
document.addEventListener('scroll', makeActive);

// Smooth scrolling
navMenu.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
        const sectionId = event.target.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
});

// Hide navigation bar while not scrolling
let isScrolling;
document.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    navMenu.style.display = 'block';
    isScrolling = setTimeout(() => {
        navMenu.style.display = 'none';
    }, 3000);
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById('scrollToTop');
document.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
