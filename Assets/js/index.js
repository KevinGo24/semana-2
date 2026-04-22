const burger = document.getElementById('btn-burger');
const menu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  // Toggle para abrir/cerrar el menú
  menu.classList.toggle('active');
  
  // Opcional: Animación del icono (puedes añadir estilos CSS para rotar las líneas)
  burger.classList.toggle('open');
});