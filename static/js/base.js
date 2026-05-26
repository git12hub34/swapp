
// Image slider (used in business.html)

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#image-slider', {
    type: 'loop',
    perPage: 4,
    gap: 20,
    arrows: false,
    pagination: false,
    drag: false,
    breakpoints: {
      1200: { perPage: 3, gap: 16 },
      768: { perPage: 2, gap: 12 },
      480: { perPage: 1, gap: 8 }
    }
  });

  splide.mount();

  // Continuously auto-scroll one image at a time
  setInterval(() => {
    splide.go('+1');
  }, 2500);
});




// scroll effect
AOS.init();


// FAQ
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        el.querySelector('.faq-icon').textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.faq-icon').textContent = '×';
      }
    });
  });


  //  SCROLL-SNAP STEPS 
  const stepsScroll = document.getElementById('stepsScroll');
  const stepNavBtns = document.querySelectorAll('.step-nav-btn');
  const stepsFill = document.getElementById('stepsFill');
  const totalSteps = 4;

  function updateActiveStep(index) {
    stepNavBtns.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
    const pct = ((index) / (totalSteps - 1)) * 100;
    stepsFill.style.height = pct + '%';
  }
 if (stepsScroll) {

  stepsScroll.addEventListener('scroll', () => {

    const slideH = stepsScroll.clientHeight;
    const scrollTop = stepsScroll.scrollTop;
    const index = Math.round(scrollTop / slideH);

    updateActiveStep(Math.min(index, totalSteps - 1));

  });

}

  stepNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.step);
      stepsScroll.scrollTo({ top: i * stepsScroll.clientHeight, behavior: 'smooth' });
    });
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

    const currentPath = window.location.pathname;
    document.querySelectorAll('a.nav-links, a.nav-cta').forEach(a => {
        if (a.getAttribute('href') === currentPath) {
            a.classList.add('active');
        }
    });
});


//Impact count up animation

const counters = document.querySelectorAll('.counter');
counters.forEach(counter=>{
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();

});

