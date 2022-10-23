
/* Barra menu principal sostenida */

window.addEventListener('scroll', () => { 
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0); 
})

/* Login Form */
let loginForm = document.querySelector('header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navlinks.classList.remove('active');
}

/* Menu Hamburguesa*/
let navlinks = document.querySelector('header .nav-links');

document.querySelector('#menu-btn').onclick = () =>{
    navlinks.classList.toggle('active');    
    loginForm.classList.remove('active');
}