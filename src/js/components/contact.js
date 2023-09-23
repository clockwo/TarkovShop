import { createElement } from "../utilities/utils.js";

const contentElement = document.getElementById("content");

const getContactForm = (name, number, mail, imgSrc) => {
  const formElement = createElement("div");
  formElement.classList.add("form");

  const imgElement = new Image();
  imgElement.src = imgSrc;
  imgElement.classList.add("form-img");

  const nameElement = createElement("h2");
  nameElement.classList.add("form-name");
  nameElement.textContent = name;

  const numberElement = createElement("p");
  numberElement.classList.add("form-number");
  numberElement.textContent = number;

  const mailElement = createElement("p");
  mailElement.classList.add("form-mail");
  mailElement.textContent = mail;

  formElement.appendChild(imgElement);
  formElement.appendChild(nameElement);
  formElement.appendChild(numberElement);
  formElement.appendChild(mailElement);

  return formElement;
};

export const getContactPage = () => {
  // header
  // contentElement.appendChild(getHeaderElement());

  // body

  const sectionElement = createElement("section");
  sectionElement.classList.add("contact", "wrapper");

  const titleElement = createElement("h1");
  titleElement.classList.add("contact-title");
  titleElement.textContent = "Contact Us";

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

// getContactPage();
