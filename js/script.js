/**
 * Lógica básica solicitada para el proyecto.
 * Incluye un manejo del DOM básico y prevención del comportamiento por defecto en el formulario.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Manejo del Formulario
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevenimos que la página se recargue (comportamiento por defecto)
            event.preventDefault();
            
            // Recolectamos los datos básicos para demostrar uso del DOM
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            
            // Validación visual simple
            if (nombre && email) {
                alert(`¡Gracias por tu mensaje, ${nombre}! Te responderemos pronto a ${email}.`);
                // Limpiamos el formulario
                contactForm.reset();
            }
        });
    }

    // 2. Efecto de log en consola para revisión de los profesores
    console.log("Inicialización exitosa: El DOM ha sido cargado. Proyecto BerryCaps.ar.");
});