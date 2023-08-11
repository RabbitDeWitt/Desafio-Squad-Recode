import { navbar } from "../../scripts/components.js";
import { menuItens, quickOptions } from "../../scripts/data.js";

const header = document.querySelector("header")
const menu = document.querySelector(".navbar")
const quickOptionsSections = document.querySelectorAll(".cards-options")

header.innerHTML = navbar()

/* MENU SIDEBAR */
menuItens.map(({ icon, label, link }) => {
  menu.innerHTML += `
  <a href="/pages/${link}/${link === "home" ? "index" : link}.html"><i class="fas fa-${icon}"></i><span>${label}</span></a>
  `
})




/* OPÇÕES RÁPIDAS CARDS */
quickOptions.map(({ title, itens }, index) => {
  let links = "";

  itens.map(({ icon, label }) => {
    links += `
    <a href="#"><i class="fas fa-${icon}"></i><span>${label}</span></a>
    `
  })

  quickOptionsSections[index].innerHTML += `
      <div class="box">
        <h3 class="title">${title}</h3>
        <div class="flex">
        ${links}
        </div>
      </div>
`
})


