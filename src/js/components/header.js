import { createElement } from "../utilities/utils.js";

export const getHeaderElement = () => {
  const pagesNames = ["Home", "Shop", "Contact"];

  const headerElement = createElement("header");
  headerElement.classList.add("header");

  const navElement = createElement("nav");
  navElement.classList.add("nav", "wrapper");

  const ulElement = createElement("ul");
  ulElement.classList.add("nav-list");
  ulElement.setAttribute("data-js-nav", "");

  for (const liName of pagesNames) {
    const liElement = document.createElement("li");
    liElement.classList.add("nav-item");
    liElement.setAttribute("data-page", `${liName}`);
    liElement.textContent = liName;
    ulElement.appendChild(liElement);
  }

  headerElement.appendChild(navElement);
  navElement.appendChild(ulElement);

  return headerElement;
};
