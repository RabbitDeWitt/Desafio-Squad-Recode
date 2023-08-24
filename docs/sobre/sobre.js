import { navbar, sidebar } from "../../scripts/components.js"
import { aboutCards, reviews } from "../../scripts/data.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const cardsSection = document.querySelector(".box-container")
const reviewsSection = document.querySelector("#reviews-section")


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

reviews.map(({ comment, name, userPic, grade }) => {
  let stars = ""
  for (let i = 0; i < Math.floor(grade); i++) {
    stars += `<i class="fas fa-star"></i>`
  }
  let diff = 5 - grade
  if (!Number.isInteger(diff)) {
    stars += `<i class="fas fa-star-half-alt"></i>`
  }
  for (let i = 0; i < Math.floor(diff); i++) {
    stars += `<i class="far fa-star"></i>`
  }

  reviewsSection.innerHTML += `
      <div class="box">
        <p>${comment}</p>
        <div class="user">
          <img src="../../assets/imgs/pic-${userPic}.jpg" alt="">
          <div>
            <h3>${name}</h3>
            <div class="stars">
              ${stars}
            </div>
          </div>
        </div>
      </div>
  `
})



