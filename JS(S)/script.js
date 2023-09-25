let body = document.getElementById('body');

let btMenuMobi = document.getElementById('menu-bar-mobile');
let menuMobile = document.getElementById('div-menu-bar-mobile-pos');
let fecharMenu = document.querySelector('#span-close');

let bodyPRINC = document.getElementById('div-principal');

let githubTextLink = document.getElementById('span-git-barra');
let linkedinTextLink = document.getElementById('span-link-barra');

let repositorioLink = document.querySelector('#span-repositorio-link');

let btConhecimenetos = document.getElementById('div-seta1');
let btConhecimentosBack = document.getElementById('div-seta2');
let divHtmlConhecimentos = document.getElementById('div-html-conhecimentos');
let divCssConhecimentos = document.getElementById('div-css-conhecimentos');
let divJsConhecimentos = document.getElementById('div-js-conhecimentos');
let divReactJsConhecimentos = document.getElementById('div-reactjs-conhecimentos');

var html = true;
var css = false;
var js = false;
var reactjs = false;

btConhecimenetos.addEventListener('click', function() {

    if(html === true) {
        divHtmlConhecimentos.classList.add('animacao-conhecimentosBefore');
        // divHtmlConhecimentos.style.display = 'none';

        html = false
        css = true

        setTimeout(function() {
            divHtmlConhecimentos.style.display = 'none';
            divHtmlConhecimentos.classList.remove('.animacao-conhecimentosBefore');
        }, 2002);

        divCssConhecimentos.style.display = 'block';
        divCssConhecimentos.classList.add('animacao-conhecimentosAfter');
    }else if(css === true) {
        divCssConhecimentos.classList.remove('animacao-conhecimentosAfter');
        divHtmlConhecimentos.style.display = 'none';

        css = false;
        js = true;

        divCssConhecimentos.classList.add('animacao-conhecimentosBefore');
        
        setTimeout(function() {
            divCssConhecimentos.style.display = 'none';
        }, 2002);

        divJsConhecimentos.style.display = 'block';
        divJsConhecimentos.classList.add('animacao-conhecimentosAfter');
    }else if(js === true) {
        divJsConhecimentos.classList.remove('animacao-conhecimentosAfter');

        js = false;
        reactjs = true;

        setTimeout(function() {
            divJsConhecimentos.style.display = 'none';
        }, 2002);

        divJsConhecimentos.classList.add('animacao-conhecimentosBefore');
        // divJsConhecimentos.style.display - 'none';
        divReactJsConhecimentos.style.display = 'block';
        divReactJsConhecimentos.classList.add('animacao-conhecimentosAfter');
    };

});

btConhecimentosBack.addEventListener('click', function() {

    if(divCssConhecimentos.classList.contains('animacao-conhecimentosAfter') && divHtmlConhecimentos.classList.contains('animacao-conhecimentosBefore')) {
        divCssConhecimentos.classList.remove('animacao-conhecimentosAfter');
        divHtmlConhecimentos.classList.remove('animacao-conhecimentosBefore');
        divCssConhecimentos.classList.add('animacao-conhecimentosAfterBack');
        
        html = true
        css = false
        
        setTimeout(function() {
            divCssConhecimentos.style.display = 'none';
        }, 2001);

        divHtmlConhecimentos.classList.add('animacao-conhecimentosBeforeBack');
        divHtmlConhecimentos.style.display = 'block';

    }

});

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
