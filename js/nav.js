const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu-item");

const menuBtn1 = document.querySelector(".menu-btn1");
const menuBtn2 = document.querySelector(".menu-btn2");
const menuBtn3 = document.querySelector(".menu-btn3");




menuBtn.addEventListener('click', function() {
    menu.classList.toggle("menu-active");
    menuBtn1.classList.toggle("menu-btn1-active");
    menuBtn2.classList.toggle("menu-btn2-active");
    menuBtn3.classList.toggle("menu-btn3-active");
})

menuItem.forEach(function(e) {
    e.addEventListener('click', () => {
        e.parentElement.classList.remove("menu-active");
        menuBtn1.classList.remove("menu-btn1-active");
        menuBtn2.classList.remove("menu-btn2-active");
        menuBtn3.classList.remove("menu-btn3-active");

    })
})


function removeActive() {
    w = document.documentElement.clientWidth
    if(w > 500) {
        console.log(w)
        menu.classList.remove("menu-active");
        menuBtn1.classList.remove("menu-btn1-active");
        menuBtn2.classList.remove("menu-btn2-active");
        menuBtn3.classList.remove("menu-btn3-active");
    }
}

window.onresize = removeActive()