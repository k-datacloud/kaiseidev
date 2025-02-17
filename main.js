// const menu = ["explore","what", "how", "who"];
// const link = document.querySelector(".sp__menu");
// window.addEventListener("load", () => {
//     link.innerHTML = menu[0];
// })
// window.addEventListener("scroll", () => {
//     const scroll = window.scrollY;
//     console.log(scroll);
    
//     let index = 0;
//     if ( scroll >= 0 && scroll <= 80 ) {
//         index = 0;
//     }
//     else if ( scroll > 80 && scroll <= 580 ) {
//         index = 1;
//     }
//     else if ( scroll > 580 && scroll <= 950 ) {
//         index = 2;
//     }
//     else if ( 950  <= scroll ) {
//         index = 3;
//     }

//     if( link.innerHTML != menu[index] ) {
//         link.classList.add("fade-out");
//         setTimeout(() => {
//             link.innerHTML = menu[index];
//             link.classList.remove("fade-out");
//             link.classList.add("fade-in");
//         }, 800);
//     }
// })


// accordion, translation-button
const answers = document.querySelectorAll(".answer");
const quesionts = document.querySelectorAll(".question-wrapper");
const items = document.querySelectorAll(".toggle-button__item");
const closes = document.querySelectorAll(".close");
quesionts.forEach((question) => {
    question.addEventListener("click", () => {
        for (let i = 0; i < quesionts.length; i++) {
            if (quesionts[i] == question) {
                answers[i].classList.toggle("showText");
                items[i].classList.toggle("show");
                closes[i].classList.toggle("hide");
            } else {
                answers[i].classList.remove("showText");
                items[i].classList.remove("show");
                closes[i].classList.remove("hide");
            }
        }
    })
})

const langSwitchBtn = document.querySelector(".language-switch");
const questionTexts = document.querySelector(".question");

console.log(questionTexts);

langSwitchBtn.addEventListener("click", () => {
    console.log(questionTexts.textContent);
    console.log(questionTexts.getAttribute("data-jp"));
    
    

    if (questionTexts.textContent.trim() === questionTexts.getAttribute("data-jp")) {
        questionTexts.classList.add("question--en");
        answers[0].classList.add("answer--en");
        questionTexts.textContent = questionTexts.getAttribute("data-en");
        answers[0].textContent = answers[0].getAttribute("data-en");
    } else {
        questionTexts.textContent = questionTexts.getAttribute("data-jp");
        answers[0].textContent = answers[0].getAttribute("data-jp");
    }
    
    // questionTexts.forEach((questionText) => {
    //     if ( questionText.textContent == questionText.getAttribute("data-jp") ) {
    //         questionText.textContent = questionText.getAttribute("data-en");
    //     } else {
    //         console.log("else");
            
    //     }
    // })
})


const backTop = document.querySelector(".backTop");
backTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})



// footerText show
const footerText = document.querySelector(".footer__text");
const windowHeight = window.innerHeight;

window.addEventListener("scroll", () => {
    const footerTextHeight = footerText.clientHeight;
    const footerTextPosition = footerText.getBoundingClientRect().top;
    console.log(windowHeight);
    console.log(footerTextPosition - footerTextHeight);
    
    if ( ( footerTextPosition - footerTextHeight ) < ( windowHeight - 40 ) ) {
        footerText.classList.add("show");
    }
})