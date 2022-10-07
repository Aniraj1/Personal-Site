// console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--div-background-color'));

// a = window.getComputedStyle(document.documentElement).getPropertyValue('--div-background-color');

// document.querySelector("body").style.backgroundColor = a;




const toTop = document.querySelector(".scroll-up");

window.addEventListener("scroll", scrollUp);

function scrollUp() {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
}


const nav = document.querySelector(".navbar");

window.addEventListener("scroll", navUp);

function navUp() {
    if (window.pageYOffset > 535) {
        nav.classList.add("visible");
    } else {
        nav.classList.remove("visible");
    }
}