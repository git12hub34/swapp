

//SROLL STEPS

  const stepsScroll = document.getElementById('stepsScroll');
  const stepNavBtns = document.querySelectorAll('.step-nav-btn');
  const stepsFill = document.getElementById('stepsFill');
  const totalSteps = 4;

  function updateActiveStep(index) {
    stepNavBtns.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    const pct = (index / (totalSteps - 1)) * 100;
    stepsFill.style.height = pct + '%';
  }

  stepsScroll.addEventListener('scroll', () => {
    const slideH = stepsScroll.clientHeight;
    const scrollTop = stepsScroll.scrollTop;
    const index = Math.round(scrollTop / slideH);

    updateActiveStep(Math.min(index, totalSteps - 1));
  });

  stepNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.step);

      stepsScroll.scrollTo({
        top: i * stepsScroll.clientHeight,
        behavior: 'smooth'
      });
    });
  });


 //FAQ

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

