const profile = document.querySelector("#profile-modal")
const searchForm = document.querySelector(".search-form")



const toggleProfile = () => {
  profile.classList.toggle("active")
  searchForm.classList.remove("active")
}

const toggleSearchForm = () => {
  searchForm.classList.toggle("active")
  profile.classList.remove("active")
}


window.onscroll = () => {
  profile.classList.remove("active")
  searchForm.classList.remove("active")
}

