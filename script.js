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

    const tarjetas = document.querySelectorAll('.cn-service');
  if (!reducirMovimiento) {
    tarjetas.forEach((t) => (t.style.opacity = 0));

    const observador = new IntersectionObserver((entradas, obs) => {
      if (entradas.some((e) => e.isIntersecting)) {
        anime({
          targets: '.cn-service',
          opacity: [0, 1],
          translateY: [40, 0],
          delay: anime.stagger(120),
          duration: 700,
          easing: 'easeOutCubic'
        });
        obs.disconnect();
      }
    }, { threshold: 0.25 });
    observador.observe(document.getElementById('servicios'));

    tarjetas.forEach((tarjeta) => {
      tarjeta.addEventListener('mouseenter', () =>
        anime({
          targets: tarjeta.querySelector('.cn-icon'),
          scale: [1, 1.2, 1],
          rotate: [0, 8, 0],
          duration: 500,
          easing: 'easeInOutQuad'
        }));
    });
  }
  const form = document.getElementById('formReserva');
  const respuesta = document.getElementById('respuesta');
  const llegada = document.getElementById('llegada');
  const salida = document.getElementById('salida');

  llegada.min = new Date().toISOString().split('T')[0];
  llegada.addEventListener('change', () => { salida.min = llegada.value; });

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    salida.setCustomValidity(
      salida.value && llegada.value && salida.value <= llegada.value ? 'Fecha inválida' : ''
    );
    form.classList.add('was-validated');
    if (!form.checkValidity()) return;

    respuesta.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
  });
    
});

  