document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Project Carousel with AutoScroll
    new Splide('#project-carousel', {
      type      : 'loop',
      drag      : 'free',
      focus     : 'center',
      perPage   : 3,
      gap       : '1rem',
      autoScroll: {
        speed        : 1,
        pauseOnHover : false,
        pauseOnFocus : true,
      },
    }).mount(window.splide.Extensions);

    // Certificate Carousel with AutoScroll
    new Splide('#certificate-carousel', {
      type      : 'loop',
      drag      : 'free',
      focus     : 'center',
      perPage   : 3,
      gap       : '1rem',
      autoScroll: {
        speed        : 1,
        pauseOnHover : false,
        pauseOnFocus : false,
      },
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount(window.splide.Extensions);
  });

const card = document.querySelector('.tilted-card');
const image = document.querySelector('.tilted-img');
const inner = document.querySelector('.tilted-inner');

card.addEventListener('mousemove', (e) => {
const bounds = card.getBoundingClientRect();
const x = e.clientX - bounds.left;
const y = e.clientY - bounds.top;

const centerX = bounds.width / 2;
const centerY = bounds.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });