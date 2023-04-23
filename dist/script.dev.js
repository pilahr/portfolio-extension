"use strict";

var _projects = _interopRequireDefault(require("./projects.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardContainer = document.querySelector(".projects__cards");

var renderCard = function renderCard(projectObject) {
  var name = projectObject.name,
      skills = projectObject.skills,
      message = projectObject.message,
      code = projectObject.code,
      preview = projectObject.preview,
      image = projectObject.image;
  return "<div class=\"card\">\n    <div class=\"card__img-container\">\n        <img class=\"card__img\" src=".concat(image, " />\n    </div>\n    <div class=\"card__text-container\">\n      <h3>").concat(skills.toUpperCase(), "</h3>\n      <h4>").concat(name, "</h4>\n      <p>").concat(message, "</p>\n    </div>\n    \n    <div class=\"card__button\">\n        <a href=").concat(code, "><button class=\"card__button\">Code &lt;/&gt;</button></a>\n        <a href=").concat(preview, "><button class=\"card__button\">Preview &lt;/&gt;</button></a>\n    </div>\n    </div>");
};

_projects["default"].forEach(function (project) {
  cardContainer.innerHTML += renderCard(project);
}); // JavaScript for a collapsible bars


var coll = document.querySelectorAll(".experience__collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}