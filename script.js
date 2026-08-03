// 1. Seleccionamos los botones superiores
const btnSignIn = document.getElementById('btn-signin');
const btnSignUp = document.getElementById('btn-signup');

// 2. Seleccionamos los dos bloques de campos
const fieldsSignIn = document.getElementById('signin-fields');
const fieldsSignUp = document.getElementById('signup-fields');

// 3. Seleccionamos el botón de envío
const btnSubmit = document.getElementById('btn-submit');

// Evento al hacer clic en "Sign In"
btnSignIn.addEventListener('click', () => {
    // Manejar la pestaña activa (borde inferior)
    btnSignIn.classList.add('active');
    btnSignUp.classList.remove('active');

    // Mostrar campos de Sign In y ocultar Sign Up
    fieldsSignIn.classList.add('active');
    fieldsSignUp.classList.remove('active');

    // Cambiar el texto del botón principal
    btnSubmit.textContent = 'Sign In';
});

// Evento al hacer clic en "Sign Up"
btnSignUp.addEventListener('click', () => {
    // Manejar la pestaña activa (borde inferior)
    btnSignUp.classList.add('active');
    btnSignIn.classList.remove('active');

    // Mostrar campos de Sign Up y ocultar Sign In
    fieldsSignUp.classList.add('active');
    fieldsSignIn.classList.remove('active');

    // Cambiar el texto del botón principal
    btnSubmit.textContent = 'Register';
});