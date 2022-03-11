const getProducts = async(search) => {
    if (search) {
        const { data } = await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/products?name=${search}`)
        return data
    } else {
        const { data } = await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/products`)
        return data
    }
}


const getCategories = async() => {
    const { data } = await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/categories`)
    return data
}


const formatPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})



const createCard = (products) => {
    const productList = document.getElementById('product-list')
    productList.innerHTML = '';
    products.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML += `
        <div class="card">
            <img src="${element.url_image}" class="card-img-top" alt="...">
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

const createNavItem = (items) => {
    const categoriesList = document.getElementById('categories-list');
    categoriesList.innerHTML = '';
    items.forEach(element => {
        const li = document.createElement('li')
        li.classList.add('nav-item')
        li.innerHTML += `
        <a class="nav-link active" aria-current="page" href="#" id="${element.name}">${element.name}</a>
        `
        categoriesList.appendChild(li)
    })
}



const search = async() => {
    const search = document.getElementById('input-search').value
    const { products } = await getProducts(search)
    return products
}

const main = async() => {
    const { products } = await getProducts();
    const categories = await getCategories();
    console.log(categories);
    createCard(products);
    createNavItem(categories);


    const btnSearch = document.getElementById('btn-search-product')
    btnSearch.addEventListener('click', async(e) => {
        e.preventDefault()
        const products = await search();
        createCard(products)
    })
}

window.addEventListener('DOMContentLoaded', e => {
    main()
})