import { createCardElement, createElement } from "../utilities/utils.js";

const contentElement = document.getElementById("content");

const MAIN_TEXT =
  "Welcome to the World Wide Weapon Shop, your one-stop destination for all your weaponry needs. We are a global leader in the arms industry, providing a wide range of high-quality, reliable, and innovative weapons to customers around the world. At World Wide Weapon Shop, we understand the importance of security and self-defense. That's why we offer an extensive selection of weapons, from handguns and rifles to knives and tactical gear. Whether you're a professional security officer, a hunting enthusiast, or a collector, we have something for everyone. Our mission is to provide our customers with the best products and services. We are committed to maintaining the highest standards of quality and safety. All our products are thoroughly tested and comply with international regulations. We pride ourselves on our knowledgeable and friendly customer service team. They are always ready to assist you in finding the perfect weapon that suits your needs and preferences. Shop with us today and experience the World Wide Weapon difference. Your safety is our priority.";

export const getHomePage = () => {
  // Body
  const sectionElement = createElement("section", { class: "home wrapper" });

  const titleElement = createElement(
    "h1",
    { class: "home-title" },
    { textContent: "World Wide Weapon Shop" },
  );

  const textElement = createElement(
    "p",
    { class: "home-text" },
    {
      textContent: MAIN_TEXT,
    },
  );

  const subtitleElement = createElement(
    "h2",
    { class: "home-subtitle" },
    { textContent: "Our Team" },
  );

  const cardPersons = [
    ["Mark", "/images/trader-1.png"],
    ["Eva", "/images/trader-2.png"],
    ["Gleb", "/images/trader-3.png"],
    ["Lina", "/images/trader-4.png"],
  ];

  const cardContainerElement = createElement("div", { class: "home-cards" });

  for (const [name, imgSrc] of cardPersons) {
    cardContainerElement.appendChild(createCardElement(name, imgSrc));
  }

  [titleElement, textElement, subtitleElement, cardContainerElement].forEach(
    (item) => sectionElement.appendChild(item),
  );

  contentElement.appendChild(sectionElement);
};
