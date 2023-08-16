import { cardCourse, navbar, sidebar } from "../../scripts/components.js"
import { courses } from "../../scripts/data.js"

const header = document.querySelector("header")
const menu = document.querySelector(".sidebar")
const coursesSection = document.querySelector("#courses .box-container")

header.innerHTML = navbar()
menu.innerHTML = sidebar()

courses.sort((a, b) => {
  return a.course < b.course ? -1 : a.course > b.course ? 1 : 0
})

courses.map((course) => {
  coursesSection.innerHTML += cardCourse(course)
})