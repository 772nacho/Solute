const projectNav = document.querySelectorAll('.home-1__project__tab__nav');
const projectContent = document.querySelectorAll('.home-1__project__content__item');

projectNav.forEach((option) => {
    option.addEventListener('click', () => {
        removeActiveMenu();
        option.classList.add('active');
        const activeContent = document.querySelector(`#${option.id}--content`);
        removeActiveContent();
        activeContent.classList.add('active');
    });
});

function removeActiveMenu() {
    projectNav.forEach((option) => {
        option.classList.remove('active');
    });
}

function removeActiveContent() {
    projectContent.forEach((content) => {
        content.classList.remove('active');
    });
}