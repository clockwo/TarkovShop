import { createElement } from "../utilities/utils.js";

const contentElement = document.getElementById("content");

const getContactForm = (name, number, mail, imgSrc) => {
  const formElement = createElement("div", { class: "form" });

  const imgElement = createElement(
    "img",
    { class: "form-img" },
    { src: imgSrc },
  );

  const nameElement = createElement(
    "h2",
    { class: "form-name" },
    { textContent: name },
  );

  const numberElement = createElement(
    "p",
    { class: "form-number" },
    { textContent: number },
  );

  const mailElement = createElement(
    "p",
    { class: "form-mail" },
    { textContent: mail },
  );

  [imgElement, nameElement, numberElement, mailElement].forEach((item) =>
    formElement.appendChild(item),
  );

  return formElement;
};

export const getContactPage = () => {
  // body

  const sectionElement = createElement("section", { class: "contact wrapper" });

  const titleElement = createElement(
    "h1",
    { class: "contact-title" },
    { textContent: "Contact Us" },
  );

  sectionElement.appendChild(titleElement);
  sectionElement.appendChild(
    getContactForm(
      "Maria Elizarova",
      "504-554-1212",
      "mariEliza@gmail.com",
      "/images/manager.png",
    ),
  );
  sectionElement.appendChild(
    getContactForm(
      "Lena Melendez",
      "504-554-6666",
      "Melendez@gmail.com",
      "/images/manager-2.png",
    ),
  );
  
  contentElement.appendChild(sectionElement);
};
