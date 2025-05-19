document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#project-carousel', {
      type      : 'loop',
      drag      : 'free',
      focus     : 'center',
      perPage   : 3,
      gap       : '1rem',
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
        pauseOnFocus: false,
      },
    }).mount(window.splide.Extensions);

    new Splide('#certificate-carousel', {
      type   : 'loop',
      perPage: 3,
      focus  : 'center',
      gap    : '1rem',
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount();

  });
