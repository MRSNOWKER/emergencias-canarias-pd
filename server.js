localStorage.setItem('usuario', 'nombreUsuario');

window.location.href = 'menu.html';

if (!localStorage.getItem('usuario')) {
    window.location.href = 'index.html';
}
