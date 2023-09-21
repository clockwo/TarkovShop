import { getHeaderElement } from "./header.js";
import { createCardElement, createElement } from "../utilities/utils.js";

const contentElement = document.getElementById("content");

export const getHomePage = () => {
  // Append header
  contentElement.appendChild(getHeaderElement());

  // Body
  const sectionElement = createElement("section");
  sectionElement.classList.add("home", "wrapper");

  const titleElement = createElement("h1");
  titleElement.classList.add("home-title");
  titleElement.textContent = "World Wide Weapon Shop";

  const textElement = createElement("p");
  textElement.classList.add("home-text");
  textElement.textContent =
    "Welcome to the World Wide Weapon Shop, your one-stop destination for all your weaponry needs. We are a global leader in the arms industry, providing a wide range of high-quality, reliable, and innovative weapons to customers around the world.\n" +
    "\n" +
    "At World Wide Weapon Shop, we understand the importance of security and self-defense. That's why we offer an extensive selection of weapons, from handguns and rifles to knives and tactical gear. Whether you're a professional security officer, a hunting enthusiast, or a collector, we have something for everyone.\n" +
    "\n" +
    "Our mission is to provide our customers with the best products and services. We are committed to maintaining the highest standards of quality and safety. All our products are thoroughly tested and comply with international regulations.\n" +
    "\n" +
    "We pride ourselves on our knowledgeable and friendly customer service team. They are always ready to assist you in finding the perfect weapon that suits your needs and preferences.\n" +
    "\n" +
    "Shop with us today and experience the World Wide Weapon difference. Your safety is our priority.";

  const subtitleElement = createElement("h2");
  subtitleElement.classList.add("home-subtitle");
  subtitleElement.textContent = "Our Team";

  const cardPersons = [
    ["Mark", "/images/trader-1.png"],
    ["Eva", "/images/trader-2.png"],
    ["Gleb", "/images/trader-3.png"],
    ["Lina", "/images/trader-4.png"],
  ];

  const cardContainerElement = createElement("div");
  cardContainerElement.classList.add("home-cards");

  for (const cardPerson of cardPersons) {
    cardContainerElement.appendChild(
      createCardElement(cardPerson[0], cardPerson[1]),
    );
  }

  const appendItems = [
    titleElement,
    textElement,
    subtitleElement,
    cardContainerElement,
  ];

  for (const appendItem of appendItems) {
    sectionElement.appendChild(appendItem);
  }

  contentElement.appendChild(sectionElement);
};

getHomePage();
