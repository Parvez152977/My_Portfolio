// Script for smooth scrolling between sections
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
  
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
  
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  });
  