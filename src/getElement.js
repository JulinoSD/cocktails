const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error('O elemento não existe')
}

export default getElement
