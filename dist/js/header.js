const btn = document.querySelector('.toggle__menu');
const header = document.querySelector('.header');
const nav = document.querySelector('.header__content');
const dropdowns = document.querySelectorAll("a"); 

btn.addEventListener("click", () => {
nav.classList.toggle("open");
header.classList.toggle("open");
});

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
        dropdown.nextElementSibling.classList.toggle("open");
    });
});

window.addEventListener("scroll", () =>   {
  console.log(scrollY);
  if ((scrollY) >= 100 ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
});