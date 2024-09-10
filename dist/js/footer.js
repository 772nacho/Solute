const footerDropDowns = document.querySelectorAll('.footer__group');

footerDropDowns.forEach((footerDropDown) => {
    footerDropDown.addEventListener("click", () => {
      footerDropDown.nextElementSibling.classList.toggle("active");
    });
  });
  