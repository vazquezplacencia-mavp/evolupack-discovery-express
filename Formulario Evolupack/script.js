const form = document.querySelector('#discovery-form');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  // Add the address supplied by your form service here, then remove this block.
  if (!form.action || form.action === window.location.href) {
    event.preventDefault();
    message.textContent = 'El formulario está listo; falta conectar el destino para recibir las respuestas.';
    message.style.display = 'block';
  }
});
