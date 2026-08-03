# Modern Glassmorphic Login & Sign-Up Interface

Una interfaz web moderna e interactiva para inicio de sesión y registro de usuarios, construida con HTML5, CSS3 y JavaScript puro. Presenta un diseño estilo *glassmorphism* (efecto cristal esmerilado) totalmente responsivo con fondo dinámico.

---

## 🚀 Características

* **Diseño Responsivo:** Adaptado para dispositivos móviles, tablets y pantallas de laptop/escritorio mediante `@media` queries.
* **Efecto Glassmorphism:** Estilizado con `backdrop-filter: blur()`, bordes semitransparentes y contraste optimizado.
* **Cambio de Formulario Dinámico (Pestañas):** Alternancia fluida entre los formularios de *Sign In* y *Sign Up* con JavaScript (DOM manipulation).
* **Integración de Iconos:** Uso de la librería FontAwesome v6 para campos de entrada e iconos vectoriales SVG para inicio de sesión social (Google/Apple).
* **Campos Personalizados:** Entradas con íconos integrados, bordes flotantes y estilos consistentes.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica del formulario y elementos de interfaz.
* **CSS3:** Estilos personalizados, Flexbox, Media Queries y efectos visuales (*Glassmorphism*).
* **JavaScript (ES6):** Manipulación del DOM para controlar el estado activo de las pestañas y la actualización del botón de envío.
* **FontAwesome (v6.5.1):** Tipografía de íconos para la representación visual de credenciales.
* **Google Fonts:** Fuentes principales `Poppins` y `Montserrat`.

---

## 📁 Estructura del Proyecto

```text
.
├── index.html                       # Estructura principal de la interfaz
├── style.css                        # Hojas de estilo y reglas responsivas
├── script.js                        # Lógica de alternancia entre Sign In y Sign Up
├── fondo.webp                       # Imagen de fondo para la sección principal
├── a.png                            # Logotipo de la aplicación
├── google-color-svgrepo-com.svg     # Logotipo vectorial de Google
└── apple-svgrepo-com.svg            # Logotipo vectorial de Apple