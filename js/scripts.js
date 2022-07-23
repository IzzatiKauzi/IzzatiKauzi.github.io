let menu = document.querySelector("#menu-icon");
let navlish = document.querySelector(".navlist");

menu.addEventListener("click",function (){
     navlish.classList.toggle("active");
});

window.onscroll = () => {
    navlish.classList.remove("active");
};