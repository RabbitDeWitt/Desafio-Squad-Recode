import { navbar, sidebar } from "../../scripts/components.js"
import { courses } from "../../scripts/data.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const playlistDetails = document.querySelector(".row")


const codCourse = localStorage.getItem("codCourse")

const { prof, profPic, thumb, date, course, numOfVideos } = courses.find((course) => course.cod === codCourse)


playlistDetails.innerHTML = `
  <div class="col">
          <form action="" method="post" class="save-list">
            <button type="submit"><i class="far fa-bookmark"></i><span>salvar playlist</span></button>
          </form>
          <img src="../../assets/imgs/thumb-${thumb}.png" alt="" class="thumb">
        </div>

        <div class="col">
          <div class="tutor">
            <img src="../../assets/imgs/pic-${profPic}.jpg" alt="">
            <div>
              <h3>${prof}</h3>
              <span>developer</span>
            </div>
          </div>

          <div class="details">
            <h3>${course}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nostrum ipsum ut possimus veritatis
              fuga!</p>
            <div class="date">
              <i class="fas fa-calendar">
                <span>${date}</span>
              </i>
            </div>
          </div>
        </div>
  `



header.innerHTML = navbar()
menu.innerHTML = sidebar()