document.addEventListener('DOMContentLoaded', () => {
    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducirMovimiento) {
    anime.timeline({ easing: 'easeOutQuad' })
      .add({ targets: '.cn-logo', opacity: [0, 1], translateY: [-12, 0], duration: 600 })
      .add({
        targets: '#menu .cn-link, #menu .cn-cta',
        opacity: [0, 1],
        translateY: [-10, 0],
        delay: anime.stagger(80),
        duration: 500
      }, '-=300');

         document.getElementById('menu').addEventListener('show.bs.collapse', () => {
      anime({
        targets: '#menu .cn-link, #menu .cn-cta',
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: anime.stagger(70),
        duration: 450,
        easing: 'easeOutQuad'
      });
    });

    document.querySelectorAll('.cn-link').forEach((link) => {
      link.addEventListener('mouseenter', () =>
        anime({ targets: link, translateY: -3, duration: 200, easing: 'easeOutQuad' }));
      link.addEventListener('mouseleave', () =>
        anime({ targets: link, translateY: 0, duration: 200, easing: 'easeOutQuad' }));
    });
  }
    
});

  