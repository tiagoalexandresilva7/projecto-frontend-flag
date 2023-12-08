function ToggleHamburguerMenu() {

    const mobileMenu = document.querySelector(".nav__mobile--links")
    const burguerIcon = document.querySelector(".burguerIcon")

    if (burguerIcon.classList.contains("fa-bars")) {
        burguerIcon.classList.replace("fa-bars", "fa-xmark")
    } else {
        burguerIcon.classList.replace("fa-xmark", "fa-bars")
    }

    mobileMenu.classList.toggle("nav__mobile--open")

};

export default ToggleHamburguerMenu;