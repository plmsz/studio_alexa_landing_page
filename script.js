document.addEventListener('DOMContentLoaded', () => {
  const servicos = document.querySelectorAll('.servico--item');
  const isMobile = window.innerWidth <= 820;

  if (isMobile) {
    servicos.forEach((el, index) => {
      if (index !== 0) {
        el.classList.add('reveal');
      }
    });

    function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  } else {
    servicos.forEach((el, index) => {
      el.classList.add('desktop-reveal');

      requestAnimationFrame(() => {
        setTimeout(() => {
          el.classList.add('active');
        }, 300 * index);
      });
    });
  }
});
