let body = document.getElementById('body');

let linkGithub = document.querySelector('#span-github');
let linkLinkedin = document.querySelector('#span-linkedin');
let menuMobile = document.querySelector('menu-bar-mobile');
let linkGithubMobile = document.querySelector('span-github-mobile');

let btMenuMobi = document.getElementById('menu-bar-mobile');
let menuMobile = document.getElementById('div-menu-bar-mobile-pos');
let fecharMenu = document.querySelector('#span-close');

let bodyPRINC = document.getElementById('div-principal');

menuMobile.addEventListener('click', function() {
    
});

btMenuMobi.addEventListener('click', function() {
    menuMobile.style.display = 'block';
    body.style.height = '590px';
    body.style.background = 'rgba(255, 255, 255, 0.8)';
    bodyPRINC.style.display = 'none';
    btMenuMobi.style.display = 'none';
});

fecharMenu.addEventListener('click', function() {
    menuMobile.style.display = 'none';
    body.style.height = '4000px';
    body.style.background = 'rgba(0, 0, 0, 0.9)';
    bodyPRINC.style.display = 'block';
    btMenuMobi.style.display = 'block';
});
