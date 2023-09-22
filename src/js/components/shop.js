import { getHeaderElement } from "./header.js";
import { createElement } from "../utilities/utils.js";

const contentElement = document.getElementById("content");

const createWeaponCard = (name, cost, imgSrc) => {
  const weaponCard = createElement("div");
  weaponCard.classList.add("weapon");

  const weaponName = createElement("h3");
  weaponName.classList.add("weapon-name");
  weaponName.textContent = name;

  const weaponCost = createElement("p");
  weaponCost.classList.add("weapon-cost");
  weaponCost.textContent = cost;

  const weaponImg = new Image();
  weaponImg.classList.add("weapon-img");
  weaponImg.src = imgSrc;

  for (const item of [weaponName, weaponCost, weaponImg]) {
    weaponCard.appendChild(item);
  }

  return weaponCard;
};

export const getShopPage = () => {
  // Append header
  contentElement.appendChild(getHeaderElement());

  // Body
  const sectionElement = createElement("section");
  sectionElement.classList.add("shop", "wrapper");

  const titleElement = createElement("h1");
  titleElement.classList.add("shop-title");
  titleElement.textContent = "Our Items";

  const weaponsElement = createElement("div");
  weaponsElement.classList.add("shop-weapons");

  const weapons = [
    ["AK-105", "/images/weapons/AK-105.webp"],
    ["AS VAL", "/images/weapons/AS-VAL.webp"],
    ["HK 416A5", "/images/weapons/HK416.webp"],
    ["TDI KRISS Vector", "/images/weapons/Vector.webp"],
    ["FN P90 ", "/images/weapons/P90.webp"],
  ];

  for (const weapon of weapons) {
    weaponsElement.appendChild(createWeaponCard(weapon[0], 5555, weapon[1]));
  }

  sectionElement.appendChild(titleElement);
  sectionElement.appendChild(weaponsElement);

  contentElement.appendChild(sectionElement);
};

getShopPage();
