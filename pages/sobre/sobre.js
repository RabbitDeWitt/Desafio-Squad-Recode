import { navbar, sidebar } from "../../scripts/components.js"
import { aboutCards } from "../../scripts/data.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const cardsSection = document.querySelector(".box-container")

header.innerHTML = navbar()
menu.innerHTML = sidebar()


aboutCards.map(({ icon, number, label }) => {
  cardsSection.innerHTML += `
      <div class="box">
        <i class="fas fa-${icon}"></i>
        <div>
          <h3>${number}</h3>
          <span>${label}</span>
        </div>
      </div>
  `

})



