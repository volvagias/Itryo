function popup(popupId) 
{
  var contenido = document.getElementById(popupId);
    if (contenido.style.display === 'block') {
      // Si el popup está abierto, ciérralo
      contenido.style.display = 'none';
      contenido.style.opacity = '0'; // Puedes ajustar la opacidad para que se desvanezca al cerrar
    } else {
      // Si el popup está cerrado, ábrelo
      contenido.style.display = 'block';
      contenido.style.opacity = '0.9'; // Puedes ajustar la opacidad para que se muestre al abrir
    }
}