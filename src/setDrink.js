const setDrink = (section) => {
    section.addEventListener('click', function(e){
        // e.preventDefault()
        const id = e.target.parentElement.dataset.id
        localStorage.setItem('drink', id)
        // console.log(id)
    })
}
export default setDrink