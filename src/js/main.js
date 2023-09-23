import "../scss/main.scss";
import { getHeaderElement } from "./components/header.js";
import { getShopPage } from "./components/shop.js";
import { getContactPage } from "./components/contact.js";
import { getHomePage } from "./components/home.js";

const contentElement = document.getElementById("content");
contentElement.appendChild(getHeaderElement());
const navigationElement = document.querySelector("[data-js-nav]");

const loadPage = (page = "home") => {
  switch (page) {
    case "home":
      getHomePage();
      break;
    case "shop":
      getShopPage();
      break;
    case "contact":
      getContactPage();
      break;
  }
};

loadPage();

navigationElement.addEventListener("click", ({ target }) => {
  if (!target.matches(".nav-item")) return;
  const element = document.querySelector("section");
  const page = target.dataset.page;
  element.remove();
  loadPage(page.toLowerCase());
});
