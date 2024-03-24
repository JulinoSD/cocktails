const fetchDrinks = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error('Bad request or the API is broken')
  } catch (error) {
    console.log('Fetching went wrong')
  }
}

export default fetchDrinks
