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

// const sidebar = document.querySelector(".sidebar-index");
// const list = document.querySelector(".sidebar-index__list");
// const items = document.querySelectorAll(".sidebar-index__item");
// window.addEventListener("scroll", () => {
//     const scroll = window.scrollY;
//     console.log(scroll);
//     let index = -1;
    
//     if ( scroll > 200 && scroll <= 680 ) {
//         index = 0;
//         // service
//     }
//     else if ( scroll > 680 && scroll <= 1050 ) {
//         index = 1;
//         // work
//     }
//     else if ( 1050  <= scroll ) {
//         index = 2;
//         // about
//     }

//     items.forEach((item, i) => {
//         if( i == index ) {
//             item.classList.add("showup");
//         }
//         else {
//             item.classList.remove("showup");
//         }
//     })
// })

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


const backTop = document.querySelector(".backTop");
backTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


const footer = document.querySelector(".footer");
const footerText = document.querySelector(".footer__text");
console.log(footerText);

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    console.log(scroll);
    
    if (scroll >= 2100) {
        footerText.classList.add("show");
    }
})