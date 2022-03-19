const { getProducts, getCategories, getProductsByCategory } = require('./api/api')
const { createCard } = require('./components/Cards')
const { createNavItem } = require('./components/Navbar')




const search = async() => {
    const search = document.getElementById('input-search').value
    const { products } = await getProducts(search)
    return products
}

const main = async() => {
    const { products } = await getProducts();
    const categories = await getCategories();
    createCard(products.rows)
    createNavItem(categories);


    const btnSearch = document.getElementById('btn-search-product')
    btnSearch.addEventListener('click', async(e) => {
        e.preventDefault()
        const products = await search();
        createCard(products.rows)
    })

    const navbarItems = document.getElementById('categories-list')
    navbarItems.addEventListener('click', async(e) => {
        const element = e.target.localName
        if (element === 'a') {
            const category = e.target.id
            const { products } = await getProductsByCategory(category)
            createCard(products)
        }
    })
}




window.addEventListener('DOMContentLoaded', (e) => {
    main()
})