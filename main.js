// header nav

const nav = document.querySelector(".header__nav");
const iconBtn = document.querySelector(".header__icon");
const menuImage = document.querySelector(".header__icon img");
console.log(menuImage);


iconBtn.addEventListener("click", () => {
    if ( menuImage.getAttribute("src") === "assets/close.svg" ) {
        nav.classList.add("show");
        menuImage.setAttribute("src", "assets/open.svg");
    } else if ( menuImage.getAttribute("src") === "assets/open.svg" ) {
        nav.classList.remove("show");
        menuImage.setAttribute("src", "assets/close.svg");
    }
})

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
    
    if ( ( footerTextPosition - footerTextHeight ) < ( windowHeight - 60 ) ) {
        footerText.classList.add("show");
    }
})