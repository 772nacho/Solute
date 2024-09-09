const btns = document.querySelectorAll(".faq-dropdown");
const contents = document.querySelectorAll(".faq-dropdown-content");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const activeContent = document.querySelector(`#${btn.id}-content`);
        if (activeContent.classList.contains("open")) {
            activeContent.classList.remove("open");
        } else {
            removeActiveContent();
            activeContent.classList.add("open");
        }
    });
}); 

function removeActiveContent() {
    contents.forEach((content) => {
        content.classList.remove("open");
    });
}