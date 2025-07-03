document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el Acordeón de Preguntas Frecuentes (FAQ)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Cierra cualquier otro item abierto antes de abrir el actual
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = 0; // Oculta la respuesta
                }
            });

            // Alterna la clase 'active' en el item clickeado
            item.classList.toggle('active');

            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                // Si está activo, establece max-height para que se expanda
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Ajusta la altura dinámicamente
            } else {
                // Si no está activo, cierra
                answer.style.maxHeight = 0;
            }
        });
    });

    // Lógica para el Header pegajoso (sticky header) - Opcional, pero mejora la UX
    const header = document.querySelector('.main-header');
    const heroSection = document.querySelector('.hero-section'); // O cualquier otra sección después del header

    function checkScroll() {
        if (window.scrollY > heroSection.offsetHeight - header.offsetHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    // Puedes añadir estilos CSS para .main-header.sticky:
    // .main-header.sticky {
    //     background-color: rgba(26, 26, 26, 0.95); /* Fondo semitransparente */
    //     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    //     padding: 15px 0; /* Un poco más compacto */
    // }
    // window.addEventListener('scroll', checkScroll);
    // Para este diseño, el header ya es fixed, así que la clase 'sticky' es más para efectos visuales al hacer scroll.
    // Si no quieres que el header cambie de tamaño al hacer scroll, puedes omitir esta parte o modificarla.
});
