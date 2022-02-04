(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const navLink = document.querySelector(".header__nav-link");
  const body = document.querySelector(".body");
  const a = document.querySelector(".header__logo");
  const span = document.querySelector(".header__logo-title");
  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-active");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
    a.classList.toggle("white");
    span.classList.toggle("text-color");
  });

    navLink.addEventListener("click", () => {
    const expanded =
      navLink.getAttribute("aria-expanded") === "true" || false;

    body.classList.toggle("no-scroll");
  });
  
})();