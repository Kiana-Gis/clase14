const barMenu = document.querySelector(".barmenu");
const navUl = document.querySelector(".nav_ul");

barMenu.addEventListener("click", () => {
    navUl.classList.toggle("barmenu_visible");
});