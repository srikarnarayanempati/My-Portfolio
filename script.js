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
const inner = document.querySelector('.tilted-inner');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -((y - centerY) / 10).toFixed(2);
  const rotateY = ((x - centerX) / 10).toFixed(2);

  inner.style.transition = 'none'; // remove transition while moving
  inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  inner.style.transition = 'transform 0.6s ease'; // smooth on exit
  inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
});



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.logo-icon').forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.getElementById("home");

    const handleNavbarVisibility = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;

      if (heroBottom <= 0) {
        navbar.style.opacity = "0";
        navbar.style.pointerEvents = "none";
      } else {
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
      }
    };

    window.addEventListener("scroll", handleNavbarVisibility);
    handleNavbarVisibility(); // Run on page load
  });