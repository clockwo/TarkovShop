import { createElement } from "../utilities/utils.js";

const contentElement = document.getElementById("content");

const createWeaponCard = (name, cost, caliber, imgSrc) => {
  const weaponCard = createElement("div", { class: "weapon" });

  const weaponName = createElement(
    "h3",
    {
      class: "weapon-name",
    },
    {
      textContent: name,
    },
  );

  const weaponCost = createElement(
    "p",
    { class: "weapon-cost" },
    { textContent: `${cost}₽` },
  );

  const weaponCaliber = createElement(
    "p",
    { class: "weapon-caliber" },
    { textContent: caliber },
  );

  const weaponImg = createElement(
    "img",
    { class: "weapon-img" },
    { src: imgSrc },
  );

  [weaponName, weaponCost, weaponCaliber, weaponImg].forEach((item) =>
    weaponCard.appendChild(item),
  );

  return weaponCard;
};

export const getShopPage = () => {
  // Body
  const sectionElement = createElement("section");
  sectionElement.classList.add("shop", "wrapper");

  const titleElement = createElement("h1");
  titleElement.classList.add("shop-title");
  titleElement.textContent = "Our Items";

  const weaponsElement = createElement("div");
  weaponsElement.classList.add("shop-weapons");

  const weapons = [
    ["AK-105", 5555, "5.45x39mm", "/images/weapons/AK-105.webp"],
    ["AS VAL", 6000, "9x39mm", "/images/weapons/AS-VAL.webp"],
    ["HK 416A5", 6500, "5.56x45mm", "/images/weapons/HK416.webp"],
    ["TDI KRISS Vector", 7000, ".45 ACP", "/images/weapons/Vector.webp"],
    ["FN P90", 5500, "5.7x28mm", "/images/weapons/P90.webp"],
    ["AUG A1", 6000, "5.56x45mm", "/images/weapons/AUG-A1.webp"],
    ["HK G36", 6200, "5.56x45mm", "/images/weapons/HK-G36.webp"],
    ["DT MDR", 6800, "5.56x45mm", "/images/weapons/DT-MDR.webp"],
  ];

  for (const weaponData of weapons) {
    const [name, cost, caliber, imgSrc] = weaponData;
    const weaponCard = createWeaponCard(name, cost, caliber, imgSrc);
    weaponsElement.appendChild(weaponCard);
  }

  [titleElement, weaponsElement].forEach((item) =>
    sectionElement.appendChild(item),
  );

  contentElement.appendChild(sectionElement);
};
