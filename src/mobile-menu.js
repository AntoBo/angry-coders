(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector(".body");
  const a = document.querySelector(".header__logo");
  const menu = document.querySelector(".header__menu-container");
  const span = document.querySelector(".header__logo-title");
  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
    a.classList.toggle("white");
    span.classList.toggle("text-color");
  });
})();