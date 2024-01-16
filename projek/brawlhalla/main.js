const displayOutput = document.querySelector(".output")
const beforePlay = document.querySelector(".title")
const playButton = document.querySelector(".start")
const choice = document.getElementsByClassName("choice")
const hero = document.querySelector(".hero")
const character = document.getElementsByClassName("character")

const dataHero = [
    {
        name: "mirage",
        weapon: "Sychte And Spear",
        story: "",
    }
    ,
    {
        name: "rayman",
        weapon: "Gauntlets And Axe",
        story: "",
    }
    ,
    {
        name: "teros",
        weapon: "Axe And Hammer",
        story: "",
    }
]
console.log(dataHero)

console.log(choice)
const aboutHero = dataHero.map((values) => values)

const defaultTextChoice = "Choice your character"
for (let i = 0; i < character.length; i++) {
    character[i].addEventListener("mouseover", function (e) {
        choice[0].textContent = `${aboutHero[i].name}`
        choice[1].textContent = `"${aboutHero[i].weapon}"`
        choice[2].textContent = `${aboutHero[i].story}`

        choice[1].classList.remove("hidden")
        choice[0].style.textShadow = "2px 2px 2px red"
        choice[2].classList.remove("hidden")
    })
    character[i].addEventListener("mouseout", function (e) {
        choice[0].textContent = defaultTextChoice
        choice[1].classList.add("hidden")
        choice[2].classList.add("hidden")
    })
}

function playNow() {
    beforePlay.classList.add("hidden")
    playButton.classList.add("hidden")

    choice[0].classList.remove("hidden")
    hero.classList.remove("hidden")

}
