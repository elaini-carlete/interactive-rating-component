const buttons = document.querySelectorAll(".btn-number")
const buttonSubmit = document.querySelector(".btn-submit")
const card = document.querySelector(".card")
const thankYouPage = document.querySelector(".thank-you")
const userSelection = document.querySelector("#selection")

buttonSubmit.addEventListener("submit", (event) => {
    event.preventDefault()
    const optionSelected = document.querySelector(".btn-selected")
    if(!optionSelected) return
    const hasSelectedOption = optionSelected.textContent
    thankYouPage.classList.remove("active")
    card.classList.add("active")
    userSelection.innerHTML = `You selected ${hasSelectedOption} out of 5`
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonSelected = document.querySelector(".btn-selected")

        if(buttonSelected) removeSelect()

        button.classList.add("btn-selected")
    })
})

function removeSelect(){
    buttons.forEach((button) => {
        button.classList.remove("btn-selected")
    })
}