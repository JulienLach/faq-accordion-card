document.addEventListener('DOMContentLoaded', () => {

    const faqTitles = document.querySelectorAll('.faq-title');
    const answerOpens = document.querySelectorAll('.open');
    const arrowFlip = document.querySelectorAll('.arrow')


    faqTitles.forEach((faqTitle, index) => {

        faqTitle.addEventListener('click', () => {
            answerOpens[index].classList.toggle('active');
            faqTitle.classList.toggle('active');
            arrowFlip[index].classList.toggle('active');
        });

    });



});
