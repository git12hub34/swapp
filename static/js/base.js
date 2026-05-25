



// Reveal feature 

  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.15
  });
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });





// Nav mobile toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('main-nav');

    if (toggle && nav) {
        toggle.setAttribute('aria-expanded', 'false');

        toggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                nav.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Active nav link
    const currentPath = window.location.pathname;
    document.querySelectorAll('a.nav-links, a.nav-cta').forEach(a => {
        if (a.getAttribute('href') === currentPath) {
            a.classList.add('active');
        }
    });
});