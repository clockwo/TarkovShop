import "../scss/main.scss";
import { getHeaderElement } from "./components/header.js";
import { getShopPage } from "./components/shop.js";
import { getContactPage } from "./components/contact.js";
import { getHomePage } from "./components/home.js";

const contentElement = document.getElementById("content");
contentElement.appendChild(getHeaderElement());
const navigationElement = document.querySelector("[data-js-nav]");

const pages = {
  home: getHomePage,
  shop: getShopPage,
  contact: getContactPage,
};

navigationElement.addEventListener("click", ({ target }) => {
  if (!target.matches(".nav-item")) return;

  const page = target.dataset.page.toLowerCase();
  if (!page) return;

  const element = document.querySelector("section");
  element.remove();

  if (pages[page]) pages[page]();
});

pages.home();
