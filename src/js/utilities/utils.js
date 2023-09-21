export const createElement = (tag) => {
  return document.createElement(tag);
};

export const createCardElement = (title, imgSource) => {
  const cardBody = createElement("div");
  cardBody.classList.add("card");

  const img = new Image();
  img.classList.add("card-img");
  img.src = imgSource;

  const cardFooter = createElement("div");
  cardFooter.classList.add("card-footer");

  const cardTitle = createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  cardFooter.appendChild(cardTitle);

  cardBody.appendChild(img);
  cardBody.appendChild(cardFooter);

  return cardBody;
};
