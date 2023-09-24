export const createElement = (tag, attributes = {}, properties = {}) => {
  const element = document.createElement(tag);

  for (const attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }

  for (const prop in properties) {
    element[prop] = properties[prop];
  }

  return element;
};

export const createCardElement = (title, imgSource) => {
  const cardBody = createElement("div", { class: "card" });

  const img = createElement("img", { class: "card-img" }, { src: imgSource });

  const cardFooter = createElement("div", { class: "card-footer" });

  const cardTitle = createElement(
    "h2",
    { class: "card-title" },
    { textContent: title },
  );

  cardFooter.appendChild(cardTitle);
  cardBody.appendChild(img);
  cardBody.appendChild(cardFooter);

  return cardBody;
};
