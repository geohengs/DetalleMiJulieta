document.getElementById('start-btn').addEventListener('click', function() {
    // 1. Ocultar pantalla de bienvenida
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.opacity = '0';
    
    // 2. Mostrar contenido principal
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fade-in');

    // 3. Reproducir música
    const audio = document.getElementById('bg-music');
    audio.volume = 0.1; // Volumen al 10%
    audio.play().catch(error => {
        console.log("El navegador bloqueó el audio automático, pero debería funcionar con el clic.");
    });

    // 4. Eliminar la pantalla de bienvenida del DOM después de la transición
    setTimeout(() => {
        welcomeScreen.remove();
    }, 1000);

    /* --- CÓDIGO NUEVO PARA EL LIGHTBOX (FOTO GRANDE) --- */
    
    // 1. Obtenemos los elementos
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementById('close-lightbox');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    // 2. Función para abrir el lightbox
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.classList.add('active'); // Mostramos el fondo negro
            lightboxImg.src = this.src; // Ponemos la misma foto que se clickeó
            captionText.innerHTML = this.alt; // Usamos el texto "alt" como título grande
        });
    });

    // 3. Funciones para cerrar el lightbox
    // Cerrar con la X
    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    // Cerrar haciendo clic fuera de la imagen (en el fondo negro)
    lightbox.addEventListener('click', function(e) {
        if(e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
});