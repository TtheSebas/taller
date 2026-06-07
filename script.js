function enviarWhatsApp() {
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const ciudad = document.getElementById('ciudad');
    const interes = document.getElementById('interes');
    const mensaje = document.getElementById('mensaje');

    let valido = true;

    [nombre, telefono, ciudad, interes].forEach(el => {
        el.classList.remove('error');
        if (!el.value.trim()) { el.classList.add('error'); valido = false; }
    });

    if (!valido) return;

    const txt = encodeURIComponent(
        `Hola, me comunico desde su página web 👋\n\n` +
        `*Nombre:* ${nombre.value.trim()}\n` +
        `*Teléfono:* ${telefono.value.trim()}\n` +
        `*Ciudad:* ${ciudad.value.trim()}\n` +
        `*Interés:* ${interes.value}\n` +
        (mensaje.value.trim() ? `*Mensaje:* ${mensaje.value.trim()}\n` : '') +
        `\nQuedo a la espera de su respuesta. ¡Gracias!`
    );

    // ⚠️ REEMPLAZA este número con el tuyo real (código de país sin + ni espacios)
    const tuNumero = '593999999999';

    window.open(`https://wa.me/${tuNumero}?text=${txt}`, '_blank');
}

// Limpiar error al escribir
['nombre', 'telefono', 'ciudad', 'interes'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('input', () => el.classList.remove('error'));
    el.addEventListener('change', () => el.classList.remove('error'));
});