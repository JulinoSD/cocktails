import get from './getElement.js'

const loading = get('.loading')

export const ShowLoad = () =>{
    loading.classList.remove('hide-loading')
}
export const HideLoad = () => {
    loading.classList.add('hide-loading')
}