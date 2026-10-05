# Casa Nativa · Landing page
Langing page responsive, proyecto de una pequeña casa de hospedaje rural en pereira. Taller de exploración de FrameWorks Css 

## Descripción del proyecto 

La página presenta refugio rural y eprmite solicitar una reserva, teniendo en ella 5 secciones: 
1. **Header / navegación:** la marca, los enlaces (inicio, experiencias, servicios, reserva, contacto) y botón de "RESERVA AHORA", en responsive pasa a ser menú hamburguesa 
2. **Hero:** etiqueta, titulo, texto y botones de "CONSULTAR DISPONIBILIDAD" y "CONOCER LA EXPERIENCIA" + composiciones visuales reflejando naturaleza
3. **Servicios:** cuatro tarjetas (habitación privada, desayuno local, zona de descanso, experiencias) 
4. **Reservas/contacto:** formulario "PLANEA TU PRÓXIMA ESCAPADA" con siete campos obligatorios y el boton de "ENVIAR SOLICITUD", por el momento no tiene backend, solo valida los campos y muestra un mensaje de confirmación 
5. **Footer:** marca + texto + contacto + ubicación + enlaces + texto final

## FrameWork asignado 
**Nombre:** Bootstrap 5.3.3
**Formas de intalación utilizadas:** CDN sin compilar ni instalar paquetes enlazados desde el `index.html`: 

```html 
<!-- CSS, en el <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
 
<!-- JS (incluye Popper), antes de cerrar </body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
``` 

**Tres caracteristicas que resultaron utiles:**
1. *Sistema de grid de 12 columnas:* (col-md-6, row-cols-md-2, row-cols-xl-4) permiten que el hero, las tarjetas y el formulario se reacomoden para ser esponsive sin la necesidad de aplicar diferentes estilos 
2.  *Variables css:* (--bs-*) se usaron --bs-body-bg, --bs-body-color, --bs-body-font-family y --bs-btn- para aplicar paleta de colores y tipografias propias sin perder la coherencia del framework de bootstrap 
3. *Componentes con comportamiento incluido:* el menú colapse funciona com data-bs- y la validacion en el formulario con needs-validation/ was-validated sin escribir propiamente de estilos 

**Tres componentes/ utilidades framework usados en el landing**
1. *Navbar* (navbar, navbar-expand-lg, navbar-toggler, collapse) utilizado para generar el menú horizontal en escritorio y para responsive un menú hamburguesa 
2. *Card:* (card, card-body, card-tittle card-text) dentro de row-cols- para manejar y crear las tarjetas de servicios y experiencias 
3. *Formularios:* (form-control. form-select, form-label) juntando utilidades de espaciado y flex (g-3, d-flex, gap-3, mb-, py-) el formulario de reserva y para alinear los botones 

**Otros recursos de bootstrap utilizados**
container, row, btn, badge, alert, ratio, sticky-top, text-center, display-4, lead, rounded-4.

## Anime.js (v3.2.1, por CDN)

| Zona | Animación | Cuándo se ejecuta |
|------|-----------|-------------------|
| Menú / header | Entrada del logo, de los enlaces (stagger) y del botón "Reservar ahora"; latido suave del botón | Al cargar la página |
| Menú móvil | Los enlaces entran desde la izquierda | Al abrir el menú |
| Servicios | Las cuatro tarjetas aparecen escalonadas (stagger) | Al entrar la sección en pantalla |
| Servicios | El ícono se mueve ligeramente | Al pasar el cursor sobre la tarjeta |
 
Las animaciones se desactivan si el usuario tiene activada la preferencia `prefers-reduced-motion`.

## Identidad visual 
- **Paleta:** verde oscuro `#0A3323`, verde musgo `#839958`, beige `#F7F4D5`, rosa `#D3968C`, verde medianoche `#105666`.
- **Tipografías (2):** Fraunces para Viga y rubik para el texto.
- **CSS propio:** `css/styles.css` solo define colores, degradados, sombras y ajustes puntuales. La estructura, el responsive y los componentes los resuelve Bootstrap.


## Estructura
 
```
casa-nativa/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js      (Anime.js y validación del formulario)
└── README.md
```

## Cumplimiento de requisitos del taller
 
- [x] Framework CSS asignado (Bootstrap)
- [x] Cinco secciones obligatorias con todos los textos
- [x] Responsive en móvil y escritorio, con menú móvil
- [x] Componentes, grid y utilidades de Bootstrap
- [x] Anime.js visible en menú/header y en servicios
- [x] Formulario completo
- [x] README con evidencia de exploración del framework
- [x] Enlace público del repositorio entregado en la plataforma

## Recursos consultados
 
- Bootstrap: https://getbootstrap.com
- Anime.js: https://animejs.com/documentation
_© 2026 Casa Nativa. Proyecto académico._