// header nav

const nav = document.querySelector(".header__nav");
const iconBtn = document.querySelector(".header__icon");
const menuItem = document.querySelectorAll(".menu-item--close");
const menuImage = document.querySelector(".header__icon img");
iconBtn.addEventListener("click", () => {
    //image change
    if ( menuImage.getAttribute("src") === "assets/close.svg" ) {
        menuImage.setAttribute("src", "assets/open.svg");
    } else if ( menuImage.getAttribute("src") === "assets/open.svg" ) {
        menuImage.setAttribute("src", "assets/close.svg");
    }
    //nav show
    nav.classList.toggle("show");

    for (let i = 0; i < menuItem.length; i++) {
        if ( menuItem[i].classList.contains("menu-item--close") ) {
            menuItem.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove("menu-item--close");
                    item.classList.add("menu-item--open");
                }, index * 100)
            })
        } else {
            menuItem[i].classList.remove("menu-item--open");
            menuItem[i].classList.add("menu-item--close");
        }
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

// exchange language
const langSwitchBtn = document.querySelector(".language-switch");
const questionTexts = document.querySelectorAll(".question");
langSwitchBtn.addEventListener("click", () => {
    
    questionTexts.forEach((questionText) => {
        if ( questionText.textContent.trim() == questionText.getAttribute("data-jp") ) {
            questionText.textContent = questionText.getAttribute("data-en");
            questionText.classList.add("question--en");
            answers.forEach((answer) => {
                answer.textContent = answer.getAttribute("data-en");
                answer.classList.add("answer--en");
            })
        } else {
            questionText.textContent = questionText.getAttribute("data-jp");
            questionText.classList.remove("question--en");
            answers.forEach((answer) => {
                answer.textContent = answer.getAttribute("data-jp");
                answer.classList.remove("answer--en");
            })
        }
    })
})

// footerText show
const footerText = document.querySelector(".footer__text");
const windowHeight = window.innerHeight;
const footerTextHeight = footerText.clientHeight;
const quarterHeight = footerTextHeight / 3;

window.addEventListener("scroll", () => {
    const footerTextPosition = footerText.getBoundingClientRect().top;
    
    if ( ( footerTextPosition - footerTextHeight ) < ( windowHeight - quarterHeight ) ) {
        footerText.classList.add("show");
    }
})

// smooth scroll
const backTop = document.querySelector(".backTop");
function smoothScroll(target, duration) {
    const startPosition = window.scrollY;
    const distance = target - startPosition;
    let start = null;

    function animation(currentTime) {
        if (start === null) {
            start = currentTime;
        }
        const timeElapsed = currentTime - start;
        const run = Math.min(1, timeElapsed / duration);
        window.scrollTo(0, startPosition + distance * easeInOutQuad(run));
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    window.requestAnimationFrame(animation);
}

backTop.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(0, 1500);
})
