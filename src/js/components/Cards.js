import { formatPrice } from '../utils/chileanPriceFormat'
const createCard = (products) => {
    const productList = document.getElementById('product-list')
    productList.innerHTML = '';
    products.forEach(element => {
        const image = (element.url_image !== '' && element.url_image !== null) ? element.url_image : 'https://via.placeholder.com/200x200'
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.classList.add('mt-2')
        div.innerHTML += `
        <div class="card"">            
        <img src="${image}" class="card-img-top img-fluid" alt="imagen producto">                            
            <div class="card-body">            
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${formatPrice.format(element.price)}</p>
                <a href="#" class="btn btn-primary">Añadir al Carro</a>
            </div>
        </div>            
    `
        productList.appendChild(div)
    })
}

export { createCard }