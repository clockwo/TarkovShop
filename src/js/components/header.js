const createElement = (tag) => {
  return document.createElement(tag)
}

export const getHeaderElement = () => {
  const pagesNames = ['Home', 'Shop', 'Contact']

  const headerElement = createElement('header')
  headerElement.classList.add('header')

  const navElement = createElement('nav')
  navElement.classList.add('nav')

  const ulElement = createElement('ul')
  ulElement.classList.add('nav-list')

  for (const liName of pagesNames) {
    const liElement = document.createElement('li')
    liElement.classList.add('nav-item')
    liElement.textContent = liName;
    ulElement.appendChild(liElement)
  }

  headerElement.appendChild(navElement)
  navElement.appendChild(ulElement)

  return headerElement;
}