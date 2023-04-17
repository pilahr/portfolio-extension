"use strict";

var _projects = _interopRequireDefault(require("./data/projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardContainer = document.querySelector(".card");

var renderCard = function renderCard(projectObject) {};

_projects["default"].forEach(function (project) {
  cardContainer.innerHTML += renderCard(project);
});