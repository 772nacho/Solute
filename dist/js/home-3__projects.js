const tabs= document.querySelectorAll(".home-3-projects__tab");
const projects = document.querySelectorAll(".home-3-projects__details");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        removeActiveTab();
        tab.classList.add("active");
        const activeProject = document.querySelector(`#${tab.id}-content`);
        removeActiveProject();
        activeProject.classList.add("active");
    });
}); 

function removeActiveTab() {
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
}

function removeActiveProject() {
    projects.forEach((projects) => {
        projects.classList.remove("active");
    });
}