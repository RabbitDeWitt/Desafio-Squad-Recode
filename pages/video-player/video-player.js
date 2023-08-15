import { navbar, sidebar } from "../../scripts/components.js"
import { courses } from "../../scripts/data.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const player = document.querySelector(".player")
const numClass = localStorage.getItem("class")

const codCourse = localStorage.getItem("codCourse")
const { prof, profPic, thumb, date, course } = courses.find((course) => course.cod === codCourse)

header.innerHTML = navbar()
menu.innerHTML = sidebar()

player.innerHTML = `
    <div class="video-details">
        <video src="" class="video" poster="../../assets/imgs/thumb-${thumb}.png" controls></video>
        <span class="num-class">Aula ${numClass}</span>
        <h3 class="title">${course}</h3>
        <div class="info">
          <i class="fas fa-calendar">
            <span>${date}</span>
          </i>
        </div>
        <div class="tutor">
          <img src="../../assets/imgs/pic-${profPic}.jpg" alt="">
          <div>
            <h3>${prof}</h3>
            <span>Professor</span>
          </div>
        </div>
        <form action="">
          <a href="../playlist/playlist.html" class="btn btn-dark-blue">Ver playlist</a>
        </form>
        <div class="description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem harum unde voluptate enim quis asperiores
            dignissimos officia, ex ipsam aliquid?</p>
        </div>
      </div>
`
