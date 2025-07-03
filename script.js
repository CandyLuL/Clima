/* Estilos Generales */
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #0A0A0A; /* Fondo oscuro */
    color: #E0E0E0; /* Texto claro */
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
    margin-top: 0;
    font-weight: 700;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

/* Header */
.main-header {
    background-color: #1A1A1A;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5em;
    font-weight: 700;
    color: #FFFFFF;
}

.main-nav ul {
    display: flex;
    gap: 30px;
}

.main-nav a {
    color: #B0B0B0;
    transition: color 0.3s ease;
}

.main-nav a:hover {
    color: #FFFFFF;
}

.cta-button {
    background-color: #50fa7b; /* Verde brillante */
    color: #1A1A1A;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #34d962;
}

/* Hero Section */
.hero-section {
    background: linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%);
    padding: 150px 0 100px; /* Padding superior ajustado por el header fixed */
}

.hero-section .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
}

.hero-content h1 {
    font-size: 3.5em;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-content .accent {
    color: #50fa7b;
}

.hero-content .subheadline {
    color: #B0B0B0;
    font-size: 1.2em;
    line-height: 1.8;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
}

.primary-button,
.secondary-button {
    display: inline-block;
    padding: 15px 30px;
    border-radius: 5px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.primary-button {
    background-color: #50fa7b;
    color: #1A1A1A;
}

.primary-button:hover {
    background-color: #34d962;
}

.secondary-button {
    border: 1px solid #B0B0B0;
    color: #B0B0B0;
}

.secondary-button:hover {
    border-color: #FFFFFF;
    color: #FFFFFF;
}

.hero-image {
    background-color: #2C2C2C; /* Placeholder oscuro para la imagen */
    height: 400px; /* Altura de ejemplo para el placeholder */
    border-radius: 10px;
}

.arrow-icon {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #1A1A1A; /* Color de la flecha */
    margin-left: 10px;
    vertical-align: middle; /* Alinea con el texto */
}

/* Estilos para el Footer (básicos) */
.main-footer {
    background-color: #1A1A1A;
    color: #B0B0B0;
    padding: 40px 0;
    text-align: center;
}

.footer-logo {
    font-size: 1.5em;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 10px;
}

/* Responsive para la Hero Section */
@media (max-width: 768px) {
    .main-header .container {
        flex-wrap: wrap; /* Permite que los elementos se envuelvan */
        justify-content: center;
        gap: 15px;
    }
    .main-nav {
        order: 3; /* Mueve la navegación al final en móviles */
        width: 100%;
        text-align: center;
        margin-top: 10px;
    }
    .main-nav ul {
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }
    .cta-button {
        order: 2; /* Posiciona el botón CTA */
    }
    .hero-section .container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .hero-image {
        order: -1; /* Mueve la imagen arriba en pantallas pequeñas */
        margin-bottom: 30px;
        height: 300px; /* Ajusta la altura para móviles */
    }
    .hero-content h1 {
        font-size: 2.5em;
    }
    .hero-content .subheadline {
        font-size: 1em;
    }
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
}
