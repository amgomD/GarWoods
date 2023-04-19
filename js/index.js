const myDiv = document.querySelector('.barra-foto');
const images = myDiv.querySelectorAll('img');
let index = 0;



function changeBackground(imageUrl) {
    // Obtener el elemento body
    const body = document.getElementById("carrusel");

    // Aplicar la animación CSS
    body.style.transition = 'none';
    // Cambiar el fondo de la página
    body.style.background = `url(${imageUrl})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';

 
      // Agregar la animación 'ease-in'
      body.style.transition = 'background-image 1s ease-in-out';
      
  }



  function changeBackgroundAutomatically() {
    // Obtener la URL de la siguiente imagen
    const imageUrl = images[index].getAttribute('src');
    changeBackground(imageUrl);
    index++;
    if (index >= images.length) {
      index = 0;
    }
  }
  
  // Cambiar el fondo automáticamente cada 2 segundos
  setInterval(changeBackgroundAutomatically, 8000);


images.forEach((img) => {
  img.addEventListener('click', () => {
    // Obtener la URL de la imagen haciendo clic
    const imageUrl = img.getAttribute('src');

    // Cambiar el fondo de la página
    changeBackground(imageUrl);
  });
});

