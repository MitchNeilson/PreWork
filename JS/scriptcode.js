//A LITTLE BIT OF INSIGHT PAGE
const readmore = document.querySelector('#read-more');
const block1 = document.querySelector('#infoaboutme');
const info = document.querySelector('#info');
const head = document.querySelector('#heading');

readmore.addEventListener('click', e => {
    e.preventDefault();
    scrollTo(0,0);
    info.animate({opacity:0},{duration:1000});
    setTimeout(function () {info.style.opacity = "0"}, 1000);
    head.animate({opacity:0},{duration:1000});
    setTimeout(function () {head.style.opacity = "0"}, 1000);
    block1.animate({opacity:0.9},{duration:1000});
    block1.style.zIndex = 10;
    block2.style.zIndex = 0;
    block3.style.zIndex = 0;
    setTimeout(function () {block1.style.opacity = "0.9"}, 1000);
});

block1.addEventListener('click', e=> {
    e.preventDefault();
    console.log('Pressed block1');

    block1.animate({opacity:0},{duration:1000});
    setTimeout(function () {block1.style.opacity = "0"}, 1000);
    info.animate({opacity:1},{duration:1000});
    setTimeout(function () {info.style.opacity = "1"}, 1000);
    head.animate({opacity:1},{duration:1000});
    setTimeout(function () {head.style.opacity = "1"}, 1000);
    
    block1.style.zIndex = 0;
})

//HOBBIES PAGE
const sneakpeak = document.querySelector('#hobbies');
const block2 = document.querySelector('#hobbiesinfo');

sneakpeak.addEventListener('click', e => {
    e.preventDefault();
    scrollTo(0,0);
    info.animate({opacity:0},{duration:1000});
    setTimeout(function () {info.style.opacity = "0"}, 1000);
    head.animate({opacity:0},{duration:1000});
    setTimeout(function () {head.style.opacity = "0"}, 1000);
    block2.animate({opacity:0.9},{duration:1000});
    block1.style.zIndex = 0;
    block2.style.zIndex = 10;
    block3.style.zIndex = 0;
    setTimeout(function () {block2.style.opacity = "0.9"}, 1000);
});

block2.addEventListener('click', e=> {
    e.preventDefault();
    console.log('Pressed block2');
    
    info.animate({opacity:1},{duration:1000});
    setTimeout(function () {info.style.opacity = "1"}, 1000);
    head.animate({opacity:1},{duration:1000});
    setTimeout(function () {head.style.opacity = "1"}, 1000);
    block2.animate({opacity:0},{duration:1000});
    block2.style.zIndex = 0;
    setTimeout(function () {block2.style.opacity = "0"}, 1000);
})

//GITHUB INFO PAGE
const github = document.querySelector('#github');
const block3 = document.querySelector('#githubinfo');

github.addEventListener('click', e => {
    e.preventDefault();
    scrollTo(0,0);
    info.animate({opacity:0},{duration:1000});
    setTimeout(function () {info.style.opacity = "0"}, 1000);
    head.animate({opacity:0},{duration:1000});
    setTimeout(function () {head.style.opacity = "0"}, 1000);
    block3.animate({opacity:0.9},{duration:1000});
    block1.style.zIndex = 0;
    block2.style.zIndex = 0;
    block3.style.zIndex = 10;
    setTimeout(function () {block3.style.opacity = "0.9"}, 1000);
});

block3.addEventListener('click', e=> {
    e.preventDefault();
    console.log('Pressed block2');
    
    info.animate({opacity:1},{duration:1000});
    setTimeout(function () {info.style.opacity = "1"}, 1000);
    head.animate({opacity:1},{duration:1000});
    setTimeout(function () {head.style.opacity = "1"}, 1000);
    block3.animate({opacity:0},{duration:1000});
    block3.style.zIndex = 0;
    setTimeout(function () {block3.style.opacity = "0"}, 1000);
})

//PASSWORD THING:
const pass = document.querySelector("#password");

pass.addEventListener('mouseenter', e => {
    e.preventDefault();

    pass.value = "Nice try....";
})

pass.addEventListener('mouseleave', e => {
    e.preventDefault();

    pass.value = "****";
})