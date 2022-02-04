// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('[href^="#"]');
const body = document.querySelector('.body');
const mobileMenuRef = document.querySelector('[data-menu]');
const menuBtnRef = document.querySelector('[data-menu-button]');
const a = document.querySelector(".header__logo");
const span = document.querySelector(".header__logo-title");

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    body.classList.toggle('no-scroll');
    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-active');
    a.classList.toggle("white");
    span.classList.toggle("text-color");

    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

