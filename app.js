import display from './src/presentDrinks.js'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=u'

window.addEventListener('DOMContentLoaded', () => {
  display(URL)
})
