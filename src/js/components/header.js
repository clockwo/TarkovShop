import { createElement } from "../utilities/utils.js";

export const getHeaderElement = () => {
  const pagesNames = ["Home", "Shop", "Contact"];

  const headerElement = createElement("header", { class: "header" });

  const navElement = createElement("nav", { class: "nav wrapper" });

  const ulElement = createElement("ul", { class: "nav-list" });
  ulElement.setAttribute("data-js-nav", "");

  for (const liName of pagesNames) {
    const liElement = createElement(
      "li",
      { class: "nav-item", "data-page": liName },
      { textContent: liName },
    );
    ulElement.appendChild(liElement);
  }

  headerElement.appendChild(navElement);
  navElement.appendChild(ulElement);

  return headerElement;
};
