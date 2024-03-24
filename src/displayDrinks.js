import get from './getElement.js'
import { input, form } from './searchForm.js'

const displayDrinks = async ({ drinks }) => {
  const section = get('.section-center')
  const title = get('.title')
  if (!drinks) {
    title.textContent = `Sorry, no drink matched you search`
    section.innerHTML = null
    return
  }
  const newDrinks = drinks
    .map(({ idDrink, strDrinkThumb, strDrink }) => {
      return `
    <a href="./drink.html">
        <article class="cocktail" data-id="${idDrink}">
          <img src="${strDrinkThumb}" alt="${strDrink}" srcset="${strDrinkThumb}" />
          <h3>${strDrink}</h3>
        </article>
    </a>
    
    `
    })
    .join('')
  section.innerHTML = newDrinks
}
export default displayDrinks
