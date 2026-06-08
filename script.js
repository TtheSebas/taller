/* ===================================================
   script.js — Muebles Mesias
   Galeria expandible + Lightbox + Nav + WhatsApp
   =================================================== */

/* --------------------------------------------------
   DATOS DE GALERIAS
   -------------------------------------------------- */
const GALLERIES = {
  sala: {
    title: "Sala & Sofas",
    images: [
      { src: "img/gal_sala_1.png", alt: "Sofa modular sala Mesias" },
      { src: "img/gal_sala_2.png", alt: "Sofa clasico piel Mesias" },
      { src: "img/gal_sala_3.png", alt: "Sala con sofa terciopelo" }
    ]
  },
  dormitorio: {
    title: "Dormitorio",
    images: [
      { src: "img/gal_dorm_1.png", alt: "Cama tapizada Mesias" },
      { src: "img/gal_dorm_2.png", alt: "Armario dormitorio Mesias" },
      { src: "img/gal_dorm_3.png", alt: "Juego de dormitorio completo" }
    ]
  },
  comedor: {
    title: "Comedor",
    images: [
      { src: "img/gal_com_1.png", alt: "Mesa comedor 6 puestos Mesias" },
      { src: "img/gal_com_2.png", alt: "Mesa redonda comedor Mesias" },
      { src: "img/gal_com_3.png", alt: "Comedor rustico moderno" }
    ]
  },
  closet: {
    title: "Closet",
    images: [
      { src: "img/gal_clos_1.png", alt: "Closet a medida Mesias" }
    ]
  },
  espejos: {
    title: "Espejos",
    images: [
      { src: "img/gal_esp_1.png", alt: "Espejo con marco de madera Mesias" }
    ]
  },
  puertas: {
    title: "Puertas",
    images: [
      { src: "img/gal_puert_1.png", alt: "Puerta interior madera Mesias" }
    ]
  },
  otras: {
    title: "Otras opciones",
    images: [
      { src: "img/gal_otras_1.png", alt: "Otros muebles Mesias" }
    ]
  }
};

/* --------------------------------------------------
   ESTADO
   -------------------------------------------------- */
let currentGallery = null;
let lightboxImages  = [];
let lightboxIndex   = 0;

/* --------------------------------------------------
   INICIO AL CARGAR EL DOM
   -------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {

  /* ---- DOM REFS ---- */
  const galleryPanel    = document.getElementById("galleryPanel");
  const galleryGrid     = document.getElementById("galleryGrid");
  const galleryTitle    = document.getElementById("galleryTitle");
  const galleryClose    = document.getElementById("galleryClose");
  const lightbox        = document.getElementById("lightbox");
  const lightboxImg     = document.getElementById("lightboxImg");
  const lightboxClose   = document.getElementById("lightboxClose");
  const lightboxPrev    = document.getElementById("lightboxPrev");
  const lightboxNext    = document.getElementById("lightboxNext");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxCounter = document.getElementById("lightboxCounter");

  /* ---- GALERIA EXPANDIBLE ---- */

  function openGallery(key) {
    const data = GALLERIES[key];
    if (!data) return;

    // Toggle: si ya esta abierto el mismo, cerrar
    if (currentGallery === key) {
      closeGallery();
      return;
    }

    currentGallery = key;
    galleryTitle.textContent = data.title;
    galleryGrid.innerHTML = "";
    lightboxImages = data.images;

    data.images.forEach(function (img, i) {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", "Ver imagen " + (i + 1));
      item.innerHTML =
        '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy">' +
        '<div class="gallery-item-overlay">' +
          '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' +
            '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>' +
          '</svg>' +
        '</div>';

      item.addEventListener("click", function () { openLightbox(i); });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") openLightbox(i);
      });

      galleryGrid.appendChild(item);

      // Animacion escalonada
      setTimeout(function () {
        item.classList.add("gallery-item--visible");
      }, 80 * i + 50);
    });

    galleryPanel.classList.add("gallery-panel--open");
    galleryPanel.setAttribute("aria-hidden", "false");

    setTimeout(function () {
      galleryPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 400);
  }

  function closeGallery() {
    currentGallery = null;
    galleryPanel.classList.remove("gallery-panel--open");
    galleryPanel.setAttribute("aria-hidden", "true");

    setTimeout(function () {
      galleryGrid.innerHTML = "";
      document.querySelectorAll(".card.card--active").forEach(function (c) {
        c.classList.remove("card--active");
        c.setAttribute("aria-expanded", "false");
      });
    }, 600);
  }

  // Click en el grid de cards
  var collectionsGrid = document.getElementById("collectionsGrid");
  if (collectionsGrid) {
    collectionsGrid.addEventListener("click", function (e) {
      var card = e.target.closest(".card[data-gallery]");
      if (!card) return;
      if (e.target.closest(".card-cta")) return;

      var key = card.dataset.gallery;

      document.querySelectorAll(".card[data-gallery]").forEach(function (c) {
        c.classList.remove("card--active");
        c.setAttribute("aria-expanded", "false");
      });

      if (currentGallery !== key) {
        card.classList.add("card--active");
        card.setAttribute("aria-expanded", "true");
      }

      openGallery(key);
    });
  }

  if (galleryClose) {
    galleryClose.addEventListener("click", closeGallery);
  }

  /* ---- LIGHTBOX ---- */

  function openLightbox(index) {
    lightboxIndex = index;
    renderLightboxImage();
    lightbox.classList.add("lightbox--open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("lightbox--open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderLightboxImage() {
    var img = lightboxImages[lightboxIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCounter.textContent = (lightboxIndex + 1) + " / " + lightboxImages.length;
    lightboxPrev.disabled = (lightboxIndex === 0);
    lightboxNext.disabled = (lightboxIndex === lightboxImages.length - 1);
  }

  if (lightboxClose)    lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);

  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", function () {
      if (lightboxIndex > 0) { lightboxIndex--; renderLightboxImage(); }
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", function () {
      if (lightboxIndex < lightboxImages.length - 1) { lightboxIndex++; renderLightboxImage(); }
    });
  }

  // Teclado para lightbox
  document.addEventListener("keydown", function (e) {
    if (!lightbox || !lightbox.classList.contains("lightbox--open")) return;
    if (e.key === "ArrowLeft"  && lightboxIndex > 0)                          { lightboxIndex--; renderLightboxImage(); }
    if (e.key === "ArrowRight" && lightboxIndex < lightboxImages.length - 1)  { lightboxIndex++; renderLightboxImage(); }
    if (e.key === "Escape") closeLightbox();
  });

  // Swipe tactil en lightbox
  var touchStartX = 0;
  if (lightbox) {
    lightbox.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) < 40) return;
      if (dx < 0 && lightboxIndex < lightboxImages.length - 1) { lightboxIndex++; renderLightboxImage(); }
      if (dx > 0 && lightboxIndex > 0)                          { lightboxIndex--; renderLightboxImage(); }
    });
  }

  /* ---- NAVBAR SCROLL ---- */
  var nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    if (nav) nav.classList.toggle("nav--scrolled", window.scrollY > 50);
  }, { passive: true });

  /* ---- MENU MOVIL ---- */
  window.toggleMenu = function () {
    var menu = document.getElementById("mobileMenu");
    var btn  = document.getElementById("hamburger");
    if (!menu) return;
    var open = menu.classList.toggle("mobile-menu--open");
    if (btn) btn.setAttribute("aria-expanded", String(open));
  };

  window.addEventListener("scroll", function () {
    var menu = document.getElementById("mobileMenu");
    if (menu && menu.classList.contains("mobile-menu--open")) {
      menu.classList.remove("mobile-menu--open");
      var btn = document.getElementById("hamburger");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  }, { passive: true });

  // Scroll suave para links ancla
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ---- CONTADOR DE CARACTERES ---- */
  var msgArea   = document.getElementById("mensaje");
  var charCount = document.getElementById("charCount");
  if (msgArea && charCount) {
    msgArea.addEventListener("input", function () {
      charCount.textContent = msgArea.value.length + " / 500";
    });
  }

  /* ---- ANIMACIONES DE ENTRADA (suaves, sin romper visibilidad) ---- */
  var animTargets = document.querySelectorAll(".why-item, .testimonial-card");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity    = "1";
          entry.target.style.transform  = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animTargets.forEach(function (el) {
      el.style.opacity    = "0";
      el.style.transform  = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      io.observe(el);
    });
  }

}); /* fin DOMContentLoaded */

/* --------------------------------------------------
   FORMULARIO WHATSAPP (global para onclick en HTML)
   -------------------------------------------------- */
function enviarWhatsApp() {
  var nombre   = document.getElementById("nombre");
  var telefono = document.getElementById("telefono");
  var ciudad   = document.getElementById("ciudad");
  var interes  = document.getElementById("interes");
  var mensaje  = document.getElementById("mensaje");
  var btn      = document.getElementById("btnEnviar");

  var valid = true;
  [nombre, telefono, ciudad, interes].forEach(function (f) { f.classList.remove("error"); });

  if (!nombre.value.trim())   { nombre.classList.add("error");   valid = false; }
  if (!telefono.value.trim() || !/^[\+0-9\s\-]{7,}$/.test(telefono.value.trim())) {
    telefono.classList.add("error"); valid = false;
  }
  if (!ciudad.value.trim())   { ciudad.classList.add("error");   valid = false; }
  if (!interes.value)         { interes.classList.add("error");  valid = false; }

  if (!valid) {
    var firstError = document.querySelector(".field input.error, .field select.error");
    if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  btn.disabled    = true;
  btn.textContent = "Abriendo WhatsApp...";

  var wa    = "593999999999"; // Cambia por el numero real
  var lines = [
    "Hola! Me interesa obtener informacion sobre muebles Mesias.",
    "Nombre: "   + nombre.value.trim(),
    "Telefono: " + telefono.value.trim(),
    "Ciudad: "   + ciudad.value.trim(),
    "Interes: "  + interes.value
  ];
  if (mensaje.value.trim()) lines.push("Mensaje: " + mensaje.value.trim());

  var url = "https://wa.me/" + wa + "?text=" + encodeURIComponent(lines.join("\n"));
  window.open(url, "_blank", "noopener");

  setTimeout(function () {
    btn.disabled = false;
    btn.textContent = "Enviar por WhatsApp";
  }, 3500);
}
