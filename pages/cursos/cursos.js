import { navbar, sidebar } from "../../scripts/components.js"
import { courses } from "../../scripts/data.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const coursesSection = document.querySelector("#courses .box-container")

header.innerHTML = navbar()
menu.innerHTML = sidebar()

courses.sort((a, b) => {
  return a.course < b.course ? -1 : a.course > b.course ? 1 : 0
})

courses.map(({ prof, profPic, date, numOfVid, thumb, course }) => {
  coursesSection.innerHTML += `
        <div class="box">
          <div class="tutor">
            <img src="/assets/imgs/pic-${profPic}.jpg" alt="">
            <div class="info">
              <h3>${prof}</h3>
              <span>${date}</span>
            </div>
          </div>
          <div class="thumb">
            <img src="/assets/imgs/thumb-${thumb}.png" alt="">
            <span>${numOfVid} videos</span>
          </div>
          <h3 class="title">${course}</h3>
          <a href="../playlist/playlist.html" class="btn btn-dark-blue">ver playslist</a>
        </div>
`
})