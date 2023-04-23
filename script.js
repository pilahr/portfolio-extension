import projects from "./projects.js";

const cardContainer = document.querySelector(".projects__cards");

const renderCard = (projectObject) => {
  const { name, skills, message, code, preview, image } = projectObject;

  return `<div class="card">
    <div class="card__img-container">
        <img class="card__img" src=${image} />
    </div>
    <h3>${skills.toUpperCase()}</h3>
    <h4>${name}</h4>
    <p>${message}</p>
    <div class="card__button">
        <a href=${code}><button class="card__button">Code &lt;/&gt;</button></a>
        <a href=${preview}><button class="card__button">Preview &lt;/&gt;</button></a>
    </div>
    </div>`;
};

projects.forEach((project) => {
  cardContainer.innerHTML += renderCard(project);
});

// JavaScript for a collapsible bars
const coll = document.querySelectorAll(".experience__collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
