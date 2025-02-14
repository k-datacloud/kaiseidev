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

const toggleBtns = document.querySelectorAll(".toggle-button");
const answers = document.querySelectorAll(".answer");
const quesionts = document.querySelectorAll(".question");
const items = document.querySelectorAll(".toggle-button__item");
const closes = document.querySelectorAll(".close");
console.log(toggleBtns);

toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
        for (let i = 0; i < toggleBtns.length; i++) {
            if (toggleBtns[i] == toggleBtn) {
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
