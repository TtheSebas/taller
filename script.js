// ═══════════════════════════════════════
//  CONFIGURACIÓN
//  ⚠️ Cambia este número por el real (código de país sin + ni espacios)
// ═══════════════════════════════════════
const TU_NUMERO_WA = '593990629502';


// ═══════════════════════════════════════
//  MENÚ HAMBURGUESA (MÓVIL)
// ═══════════════════════════════════════
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburger');
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburger');
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', false);
    }
});


// ═══════════════════════════════════════
//  CONTADOR DE CARACTERES EN TEXTAREA
// ═══════════════════════════════════════
const textarea = document.getElementById('mensaje');
const charCount = document.getElementById('charCount');

if (textarea && charCount) {
    textarea.addEventListener('input', function () {
        charCount.textContent = `${this.value.length} / 500`;
    });
}


// ═══════════════════════════════════════
//  VALIDACIÓN EN TIEMPO REAL
// ═══════════════════════════════════════
function validarCampo(el) {
    const esValido = el.value.trim() !== '';
    el.classList.toggle('error', !esValido);
    return esValido;
}

['nombre', 'telefono', 'ciudad', 'interes'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const limpiar = () => el.classList.remove('error');
    el.addEventListener('input', limpiar);
    el.addEventListener('change', limpiar);
});


// ═══════════════════════════════════════
//  ENVÍO POR WHATSAPP
// ═══════════════════════════════════════
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const ciudad = document.getElementById('ciudad');
    const interes = document.getElementById('interes');
    const mensaje = document.getElementById('mensaje');
    const btnEnviar = document.getElementById('btnEnviar');

    // Validar campos requeridos
    const camposRequeridos = [nombre, telefono, ciudad, interes];
    const formularioValido = camposRequeridos.map(validarCampo).every(Boolean);

    if (!formularioValido) {
        const primerError = camposRequeridos.find(el => el.classList.contains('error'));
        if (primerError) {
            primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            primerError.focus();
        }
        return;
    }

    // Construir texto del mensaje
    const lineas = [
        `Hola, me comunico desde su página web 👋`,
        ``,
        `*Nombre:* ${nombre.value.trim()}`,
        `*Teléfono:* ${telefono.value.trim()}`,
        `*Ciudad:* ${ciudad.value.trim()}`,
        `*Interés:* ${interes.value}`,
    ];

    if (mensaje && mensaje.value.trim()) {
        lineas.push(`*Mensaje:* ${mensaje.value.trim()}`);
    }
    lineas.push(``, `Quedo a la espera de su respuesta. ¡Gracias!`);

    const texto = encodeURIComponent(lineas.join('\n'));
    const url = `https://wa.me/${TU_NUMERO_WA}?text=${texto}`;

    // Feedback visual: deshabilitar botón 3 segundos
    if (btnEnviar) {
        const svgWa = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Abriendo WhatsApp...';

        setTimeout(() => {
            btnEnviar.disabled = false;
            btnEnviar.innerHTML = `${svgWa} Enviar por WhatsApp`;
        }, 3000);
    }

    // Abrir WhatsApp de forma segura
    window.open(url, '_blank', 'noopener,noreferrer');
}


// ═══════════════════════════════════════
//  ANIMACIONES AL HACER SCROLL
// ═══════════════════════════════════════
const animStyles = document.createElement('style');
animStyles.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animStyles);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.card, .why-item, .testimonial-card, .contact-left, .form-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});


// ═══════════════════════════════════════
//  SOMBRA DEL NAV AL HACER SCROLL
// ═══════════════════════════════════════
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.boxShadow = window.scrollY > 20
        ? '0 4px 20px rgba(44, 26, 14, 0.08)'
        : 'none';
}, { passive: true });