

const hamburger_menu = document.querySelector("#hamburger-menu");
const nav_menu = document.querySelector(".nav-menu");
const nav = document.querySelector(".nav");
const magnifying_glass = document.querySelector(".fa-magnifying-glass");
const search_bar = document.querySelector("#search-bar");
const menu_label = document.querySelector("#menu-label");

magnifying_glass.addEventListener("click", () => {
    search_bar.classList.toggle("active-search-bar");
});

hamburger_menu.addEventListener("click", () => {
    hamburger_menu.classList.toggle("active-hamburger-menu");
    nav_menu.classList.toggle("active-nav-menu");
    if (menu_label.textContent === "Menu") {
        menu_label.textContent = "Close";
    } else {
        menu_label.textContent = "Menu";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        hamburger_menu.classList.remove("active-hamburger-menu");
        nav_menu.classList.remove("active-nav-menu");
        menu_label.textContent = "Menu"
    }
});

window.addEventListener("scroll", () => {
    nav.classList.toggle("active-nav", scrollY > 0);
})