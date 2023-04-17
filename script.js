import projects from "./data/projects";

const cardContainer = document.querySelector(".card")

const renderCard = (projectObject) => {
    const {name, skills, message, code, preview, image }
}
projects.forEach((project) => {
    cardContainer.innerHTML += renderCard(project)
})