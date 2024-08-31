const faqNav = document.querySelectorAll('.faq_tab');
const faqContent = document.querySelectorAll('.faq_content--body');

faqNav.forEach((faq) => {
    faq.addEventListener("click", () => {
        removeActiveMenu();
        faq.classList.add("active");
        const activeContent = document.querySelector(`#${faq.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    });
    });
    function removeActiveMenu() {
        faqNav.forEach((faq) => {
            faq.classList.remove("active");
        });
    }
    function removeActiveContent() {
        faqContent.forEach((faq) => {
            faq.classList.remove("active");
        });
    }
// first dd
function firstDropdowns() {
    const contentSections = document.querySelectorAll('.faq_content--body');
    contentSections.forEach(section => {

        const firstQuestion = section.querySelector('.faq_content--text h3');
        if (firstQuestion) {
            const answer = firstQuestion.nextElementSibling;
            if (answer && answer.tagName === 'P') {
                answer.classList.add('open');
            }
            const dd = firstQuestion.querySelector('i');
            if (dd) {
                dd.classList.add('open');
            }
        }
    });
}
// para sa hindi first dd
function OtherAnswers(clickedQuestion) {
    const faqBody = clickedQuestion.closest('.faq_content--body');
    if (faqBody) {
        const otherQuestions = faqBody.querySelectorAll('.faq_content--text h3');
        otherQuestions.forEach(question => {
            if (question !== clickedQuestion) {
                const ddown = question.nextElementSibling;
                if (ddown && ddown.tagName === 'P') {
                    ddown.classList.remove('open');
                }
                const dd = question.querySelector('i');
                if (dd) {
                    dd.classList.remove('open');
                }
            }
        });
    }
}
const questions = document.querySelectorAll(".faq_content--text h3");
questions.forEach(question => {
    question.addEventListener("click", () => {
        
        const answer = question.nextElementSibling;
        if (answer && answer.tagName === 'P') {
            answer.classList.toggle('open');
        }
        const dd = question.querySelector('i');
        if (dd) {
            dd.classList.toggle('open');
        }
        OtherAnswers(question);
    });
});
firstDropdowns();