import { navbar, sidebar } from "../../scripts/components.js";
import { courses } from "../../scripts/data.js";

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const profile = document.querySelector(".details")
const coursesSection = document.querySelector(".box-container")

const codCourse = localStorage.getItem("codCourse")

header.innerHTML = navbar()
menu.innerHTML = sidebar()

const { cod, prof, profPic, course, thumb, numOfVid } = courses.find((couse) => couse.cod === codCourse)

profile.innerHTML = `
      <div class="tutor">
        <img src="../../assets/imgs/pic-${profPic}.jpg" alt="">
        <h3>${prof}</h3>
        <span>Professor</span>
      </div>
      <div class="flex">
        <p>Total de playlist: <span>1</span></p>
        <p>Total de vídeos: <span>${numOfVid}</span></p>
      </div>
`

coursesSection.innerHTML = `
        <div class="box">
          <div class="thumb">
            <img src="/assets/imgs/thumb-${thumb}.png" alt="">
            <span>${numOfVid} videos</span>
          </div>
          <h3 class="title">${course}</h3>
          <a href="../playlist/playlist.html" class="btn btn-dark-blue" onclick="setCourse(${cod})">ver playslist</a>
        </div>
`



