const arrows = document.querySelectorAll(".arrows");
const faqAnswer = document.querySelectorAll(".faq_answer");

const buttons = document.querySelectorAll(".buttons")
const tabs = document.querySelectorAll(".tabs")

arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", () =>{
        faqAnswer.forEach((answer, j) =>{
            answer.classList.toggle("hidden", j!==i)
        })
    })
})

buttons.forEach (( button, i)=>{
    button.addEventListener("click", () =>{
     tabs.forEach((tab, j) =>{
        tab.classList.toggle("hidden", j!==i)
     })
    })
})

