/* ===================================================
   script.js — Muebles Mesias
   Galeria expandible + Lightbox + Nav + WhatsApp
   =================================================== */

/* --------------------------------------------------
   DATOS DE GALERIAS — carpetas reales del proyecto
   -------------------------------------------------- */
const GALLERIES = {
  sala: {
    title: "Sala & Sofas",
    images: [
      { src: "img/Sala&Sofas/110.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/111.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/113.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/114.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/169.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/192.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/20.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/32.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/33.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/34.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/87.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/9.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-07 at 9.34.43 PM.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-07 at 9.34.43 PM3.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-07 at 9.34.44 PM4.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-07 at 9.34.44 PM5.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-07 at 9.34.45 PM6.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-07 at 9.34.46 PM10.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.09.45 PM18.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.09.45 PM19.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.09.45 PM20.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.09.46 PM.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.10.36 PM 22.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.10.40 PM26.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.11.15 PM32.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.26.26 PM.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.26.27 PM.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.26.53 PM8.jpeg", alt: "Sala & Sofas" },
      { src: "img/Sala&Sofas/WhatsApp Image 2026-06-08 at 7.26.53 PM9.jpeg", alt: "Sala & Sofas" }
    ]
  },
  dormitorio: {
    title: "Dormitorio",
    images: [
      { src: "img/Dormitorio/1.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/6.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/7WhatsApp Image 2026-06-08 at 7.26.30 P.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/15.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/31.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/37.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/39.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/41.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/61.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/62.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/96.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/109.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/112.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/123.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/124.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/125.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/126.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/127.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/128.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/129.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/130.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/131.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/132.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/133.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/134.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/135.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/136.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/137.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/138.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/139.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/140.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/141.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/142.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/143.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/144.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/145.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/146.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/147.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/148.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/149.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/150.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/151.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/152.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/160.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/161.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/162.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/163.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/170.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/171.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/172.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/173.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/177.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/178.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/179.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/180.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/187.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/188.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/189.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/190.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/191.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/193.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/197.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/198.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/199.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/200.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/201.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/204.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/205.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/206.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/207.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/219.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/240.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/241.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-07 at 9.34.45 PM7.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.09.28 PM12.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.09.29 PM13.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.09.29 PM14.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.09.31 PM15.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.09.31 PM16.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.09.32 PM17.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.09.59 20.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.10.38 PM.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.11.12 PM26.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.11.12 PM27.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.11.14 PM28.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.11.14 PM29.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.11.15 PM.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.11.15 PM30.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.11.16 PM34.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.26.27 PM1.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.26.29 PM6.jpeg", alt: "Dormitorio" },
      { src: "img/Dormitorio/WhatsApp Image 2026-06-08 at 7.26.30 PM.jpeg", alt: "Dormitorio" }
    ]
  },
  comedor: {
    title: "Comedor",
    images: [
      { src: "img/Comedor/11.jpeg", alt: "Comedor" },
      { src: "img/Comedor/12.jpeg", alt: "Comedor" },
      { src: "img/Comedor/18.jpeg", alt: "Comedor" },
      { src: "img/Comedor/19.jpeg", alt: "Comedor" },
      { src: "img/Comedor/44.jpeg", alt: "Comedor" },
      { src: "img/Comedor/45.jpeg", alt: "Comedor" },
      { src: "img/Comedor/48.jpeg", alt: "Comedor" },
      { src: "img/Comedor/53.jpeg", alt: "Comedor" },
      { src: "img/Comedor/55.jpeg", alt: "Comedor" },
      { src: "img/Comedor/58.jpeg", alt: "Comedor" },
      { src: "img/Comedor/59.jpeg", alt: "Comedor" },
      { src: "img/Comedor/115.jpeg", alt: "Comedor" },
      { src: "img/Comedor/116.jpeg", alt: "Comedor" },
      { src: "img/Comedor/117.jpeg", alt: "Comedor" },
      { src: "img/Comedor/118.jpeg", alt: "Comedor" },
      { src: "img/Comedor/119.jpeg", alt: "Comedor" },
      { src: "img/Comedor/120.jpeg", alt: "Comedor" },
      { src: "img/Comedor/121.jpeg", alt: "Comedor" },
      { src: "img/Comedor/122.jpeg", alt: "Comedor" },
      { src: "img/Comedor/195.jpeg", alt: "Comedor" },
      { src: "img/Comedor/196.jpeg", alt: "Comedor" },
      { src: "img/Comedor/209.jpeg", alt: "Comedor" },
      { src: "img/Comedor/211.jpeg", alt: "Comedor" },
      { src: "img/Comedor/221.jpeg", alt: "Comedor" },
      { src: "img/Comedor/222.jpeg", alt: "Comedor" },
      { src: "img/Comedor/230.jpeg", alt: "Comedor" },
      { src: "img/Comedor/231.jpeg", alt: "Comedor" },
      { src: "img/Comedor/238.jpeg", alt: "Comedor" },
      { src: "img/Comedor/239.jpeg", alt: "Comedor" },
      { src: "img/Comedor/WhatsApp Image 2026-06-08 at 7.10.37 PM23.jpeg", alt: "Comedor" }
    ]
  },
  closet: {
    title: "Closet",
    images: [
      { src: "img/Closet/49.jpeg", alt: "Closet" },
      { src: "img/Closet/50.jpeg", alt: "Closet" },
      { src: "img/Closet/51.jpeg", alt: "Closet" },
      { src: "img/Closet/52.jpeg", alt: "Closet" },
      { src: "img/Closet/56.jpeg", alt: "Closet" },
      { src: "img/Closet/57.jpeg", alt: "Closet" },
      { src: "img/Closet/166.jpeg", alt: "Closet" },
      { src: "img/Closet/167.jpeg", alt: "Closet" },
      { src: "img/Closet/181.jpeg", alt: "Closet" },
      { src: "img/Closet/182.jpeg", alt: "Closet" },
      { src: "img/Closet/WhatsApp Image 2026-06-08 at 7.26..jpeg", alt: "Closet" },
      { src: "img/Closet/WhatsApp Image 2026-06-08 at 7.26.30 PM7.jpeg", alt: "Closet" }
    ]
  },
  espejos: {
    title: "Espejos",
    images: [
      { src: "img/Espejos/208.jpeg", alt: "Espejos" },
      { src: "img/Espejos/228.jpeg", alt: "Espejos" },
      { src: "img/Espejos/229.jpeg", alt: "Espejos" },
      { src: "img/Espejos/234.jpeg", alt: "Espejos" },
      { src: "img/Espejos/235.jpeg", alt: "Espejos" },
      { src: "img/Espejos/WhatsApp Image 2026-06-07 at 9.34.45 PM8.jpeg", alt: "Espejos" },
      { src: "img/Espejos/WhatsApp Image 2026-06-08 at 7.10..jpeg", alt: "Espejos" },
      { src: "img/Espejos/WhatsApp Image 2026-06-08 at 7.10.39 PM.jpeg", alt: "Espejos" },
      { src: "img/Espejos/WhatsApp Image 2026-06-08 at 7.10.39 PM25.jpeg", alt: "Espejos" },
      { src: "img/Espejos/WhatsApp Image 2026-06-08 at 7.26.29 PM4.jpeg", alt: "Espejos" },
      { src: "img/Espejos/WhatsApp Image 2026-06-08 at 7.26.29 PM5.jpeg", alt: "Espejos" }
    ]
  },
  puertas: {
    title: "Puertas",
    images: [
      { src: "img/Puertas/54.jpeg", alt: "Puertas" },
      { src: "img/Puertas/164.jpeg", alt: "Puertas" },
      { src: "img/Puertas/165.jpeg", alt: "Puertas" }
    ]
  },
  bano: {
    title: "Baño",
    images: [
      { src: "img/Bano/64.jpeg", alt: "Bano" },
      { src: "img/Bano/65.jpeg", alt: "Bano" },
      { src: "img/Bano/218.jpeg", alt: "Bano" }
    ]
  },
  cocinas: {
    title: "Cocinas",
    images: [
      { src: "img/Cocinas/10.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/94.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/97.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/98.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/183.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/184.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/185.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/186.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/210.jpeg", alt: "Cocinas" },
      { src: "img/Cocinas/WhatsApp Image 2026-06-07 at 9.34.45 PM9.jpeg", alt: "Cocinas" }
    ]
  },
  oficina: {
    title: "Oficina",
    images: [
      { src: "img/oficina/25.jpeg", alt: "Oficina" },
      { src: "img/oficina/38.jpeg", alt: "Oficina" },
      { src: "img/oficina/40.jpeg", alt: "Oficina" },
      { src: "img/oficina/43.jpeg", alt: "Oficina" },
      { src: "img/oficina/99.jpeg", alt: "Oficina" },
      { src: "img/oficina/100.jpeg", alt: "Oficina" },
      { src: "img/oficina/101.jpeg", alt: "Oficina" },
      { src: "img/oficina/102.jpeg", alt: "Oficina" },
      { src: "img/oficina/103.jpeg", alt: "Oficina" },
      { src: "img/oficina/156.jpeg", alt: "Oficina" }
    ]
  },
  ventanas: {
    title: "Ventanas",
    images: [
      { src: "img/Ventanas/26.jpeg", alt: "Ventanas" },
      { src: "img/Ventanas/27.jpeg", alt: "Ventanas" },
      { src: "img/Ventanas/28.jpeg", alt: "Ventanas" },
      { src: "img/Ventanas/29.jpeg", alt: "Ventanas" },
      { src: "img/Ventanas/107.jpeg", alt: "Ventanas" },
      { src: "img/Ventanas/108.jpeg", alt: "Ventanas" }
    ]
  },
  otras: {
    title: "Otras Opciones",
    images: [
      { src: "img/OtrasOPciones/16.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/17.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/23.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/24.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/35.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/36.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/46.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/60.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/70.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/95.jpeg",  alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/159.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/168.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/194.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/212.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/214.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/215.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/216.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/217.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/226.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/232.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/236.jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/WhatsApp Image 2026-06-07 at 9.34.43 PM..jpeg", alt: "Otras Opciones" },
      { src: "img/OtrasOPciones/WhatsApp Image 2026-06-08 at 7.09.59 PM.jpeg",  alt: "Otras Opciones" }
    ]
  },
  proceso: {
    title: "Proceso de Fabricacion",
    images: [
      { src: "img/proceso/157.jpeg", alt: "Proceso de fabricacion" },
      { src: "img/proceso/158.jpeg", alt: "Proceso de fabricacion" },
      { src: "img/proceso/223.jpeg", alt: "Proceso de fabricacion" },
      { src: "img/proceso/224.jpeg", alt: "Proceso de fabricacion" },
      { src: "img/proceso/225.jpeg", alt: "Proceso de fabricacion" }
    ]
  },
  videos: {
    title: "Videos de Exhibicion",
    images: [
      { src: "img/VideosExibicion/42.mp4",  alt: "Video de exhibicion", type: "video" },
      { src: "img/VideosExibicion/104.mp4", alt: "Video de exhibicion", type: "video" },
      { src: "img/VideosExibicion/153.mp4", alt: "Video de exhibicion", type: "video" }
    ]
  }
};

/* --------------------------------------------------
   ESTADO
   -------------------------------------------------- */
var currentGallery = null;
var lightboxImages = [];
var lightboxIndex = 0;

/* --------------------------------------------------
   INICIO AL CARGAR EL DOM
   -------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {

  var galleryPanel = document.getElementById("galleryPanel");
  var galleryGrid = document.getElementById("galleryGrid");
  var galleryTitle = document.getElementById("galleryTitle");
  var galleryClose = document.getElementById("galleryClose");
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var lightboxBackdrop = document.getElementById("lightboxBackdrop");
  var lightboxCounter = document.getElementById("lightboxCounter");

  /* ---- GALERIA ---- */
  function openGallery(key) {
    var data = GALLERIES[key];
    if (!data) return;

    if (currentGallery === key) { closeGallery(); return; }

    currentGallery = key;
    galleryTitle.textContent = data.title;
    galleryGrid.innerHTML = "";
    lightboxImages = data.images;

    data.images.forEach(function (img, i) {
      var item = document.createElement("div");
      item.className = "gallery-item";
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", "Ver " + (img.type === "video" ? "video" : "imagen") + " " + (i + 1));

      if (img.type === "video") {
        item.classList.add("gallery-item--video");
        item.innerHTML =
          '<video src="' + img.src + '" muted playsinline preload="metadata" class="gallery-video-thumb"></video>' +
          '<div class="gallery-item-overlay">' +
            '<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">' +
              '<circle cx="12" cy="12" r="11" fill="rgba(44,26,14,0.7)"/>' +
              '<polygon points="10,8 18,12 10,16" fill="#C09250"/>' +
            '</svg>' +
          '</div>';
      } else {
        item.innerHTML =
          '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy">' +
          '<div class="gallery-item-overlay">' +
            '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' +
              '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>' +
            '</svg>' +
          '</div>';
      }

      item.addEventListener("click", function () { openLightbox(i); });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") openLightbox(i);
      });
      galleryGrid.appendChild(item);

      setTimeout(function () {
        item.classList.add("gallery-item--visible");
      }, 70 * i + 50);
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

  var collectionsGrid = document.getElementById("collectionsGrid");
  if (collectionsGrid) {
    collectionsGrid.addEventListener("click", function (e) {
      var card = e.target.closest(".card[data-gallery]");
      if (!card || e.target.closest(".card-cta")) return;
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

  if (galleryClose) galleryClose.addEventListener("click", closeGallery);

  /* ---- LIGHTBOX ---- */
  function openLightbox(index) {
    lightboxIndex = index;
    renderLightboxImage();
    lightbox.classList.add("lightbox--open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    // Pausar video si hay uno activo
    var activeVideo = lightbox.querySelector("video");
    if (activeVideo) { activeVideo.pause(); activeVideo.src = ""; }
    lightbox.classList.remove("lightbox--open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderLightboxImage() {
    var media = lightboxImages[lightboxIndex];
    // Limpiar video anterior si existe
    var oldVideo = lightbox.querySelector("video.lightbox-video");
    if (oldVideo) { oldVideo.pause(); oldVideo.remove(); }

    if (media.type === "video") {
      lightboxImg.style.display = "none";
      var vid = document.createElement("video");
      vid.className = "lightbox-video";
      vid.src = media.src;
      vid.controls = true;
      vid.autoplay = true;
      vid.playsInline = true;
      vid.style.cssText = "max-width:100%;max-height:80vh;border-radius:4px;display:block;margin:0 auto;";
      lightboxImg.parentNode.insertBefore(vid, lightboxImg);
    } else {
      lightboxImg.style.display = "";
      lightboxImg.src = media.src;
      lightboxImg.alt = media.alt;
    }

    lightboxCounter.textContent = (lightboxIndex + 1) + " / " + lightboxImages.length;
    lightboxPrev.disabled = (lightboxIndex === 0);
    lightboxNext.disabled = (lightboxIndex === lightboxImages.length - 1);
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
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

  document.addEventListener("keydown", function (e) {
    if (!lightbox || !lightbox.classList.contains("lightbox--open")) return;
    if (e.key === "ArrowLeft" && lightboxIndex > 0) { lightboxIndex--; renderLightboxImage(); }
    if (e.key === "ArrowRight" && lightboxIndex < lightboxImages.length - 1) { lightboxIndex++; renderLightboxImage(); }
    if (e.key === "Escape") closeLightbox();
  });

  var touchStartX = 0;
  if (lightbox) {
    lightbox.addEventListener("touchstart", function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) < 40) return;
      if (dx < 0 && lightboxIndex < lightboxImages.length - 1) { lightboxIndex++; renderLightboxImage(); }
      if (dx > 0 && lightboxIndex > 0) { lightboxIndex--; renderLightboxImage(); }
    });
  }

  /* ---- NAVBAR ---- */
  var nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    if (nav) nav.classList.toggle("nav--scrolled", window.scrollY > 50);
  }, { passive: true });

  window.toggleMenu = function () {
    var menu = document.getElementById("mobileMenu");
    var btn = document.getElementById("hamburger");
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

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.querySelector(link.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
  });

  /* ---- CONTADOR CARACTERES ---- */
  var msgArea = document.getElementById("mensaje");
  var charCount = document.getElementById("charCount");
  if (msgArea && charCount) {
    msgArea.addEventListener("input", function () {
      charCount.textContent = msgArea.value.length + " / 500";
    });
  }

  /* ---- CONTADORES DE FOTOS — leidos desde GALLERIES ---- */
  document.querySelectorAll(".card[data-gallery]").forEach(function (card) {
    var key = card.dataset.gallery;
    var data = GALLERIES[key];
    if (!data) return;

    var hint = card.querySelector(".card-gallery-hint");
    if (!hint) return;

    var count = data.images.length;
    var label = count === 1 ? "1 foto" : count + " fotos";

    // Preservar el icono SVG que ya tiene el hint y solo actualizar el texto
    var svg = hint.querySelector("svg");
    hint.textContent = " " + label;
    if (svg) hint.insertBefore(svg, hint.firstChild);
  });

  /* ---- ANIMACIONES ENTRADA ---- */
  var animTargets = document.querySelectorAll(".why-item, .testimonial-card");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animTargets.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      io.observe(el);
    });
  }

}); /* fin DOMContentLoaded */

/* ---- WHATSAPP (global) ---- */
function enviarWhatsApp() {
  var nombre = document.getElementById("nombre");
  var telefono = document.getElementById("telefono");
  var ciudad = document.getElementById("ciudad");
  var interes = document.getElementById("interes");
  var mensaje = document.getElementById("mensaje");
  var btn = document.getElementById("btnEnviar");

  var valid = true;
  [nombre, telefono, ciudad, interes].forEach(function (f) { f.classList.remove("error"); });

  if (!nombre.value.trim()) { nombre.classList.add("error"); valid = false; }
  if (!telefono.value.trim() || !/^[\+0-9\s\-]{7,}$/.test(telefono.value.trim())) { telefono.classList.add("error"); valid = false; }
  if (!ciudad.value.trim()) { ciudad.classList.add("error"); valid = false; }
  if (!interes.value) { interes.classList.add("error"); valid = false; }

  if (!valid) {
    var first = document.querySelector(".field input.error, .field select.error");
    if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  btn.disabled = true;
  btn.textContent = "Abriendo WhatsApp...";

  var wa = "593999999999";
  var lines = [
    "Hola! Me interesa obtener informacion sobre muebles Mesias.",
    "Nombre: " + nombre.value.trim(),
    "Telefono: " + telefono.value.trim(),
    "Ciudad: " + ciudad.value.trim(),
    "Interes: " + interes.value
  ];
  if (mensaje.value.trim()) lines.push("Mensaje: " + mensaje.value.trim());

  window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");

  setTimeout(function () { btn.disabled = false; btn.textContent = "Enviar por WhatsApp"; }, 3500);
}

