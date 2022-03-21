import { getProducts, getCategories, getProductsByCategory, getProductsPerPage } from './api/api'
import { createCard } from './components/Cards'
import { createNavItem } from './components/Navbar'
import { createPagination } from './components/Pagination'


const search = async() => {
    const search = document.getElementById('input-search').value
    const { data } = await getProducts(search)
    return data.products
}

const main = async() => {
    const { data } = await getProducts();
    console.log(data);
    const categories = await getCategories();
    createCard(data.products)
    createNavItem(categories);
    createPagination(data.current, data.pages)

    const btnSearch = document.getElementById('btn-search-product')
    btnSearch.addEventListener('click', async(e) => {
        e.preventDefault()
        const products = await search();
        createCard(products)
    })

    const navbarItems = document.getElementById('categories-list')
    navbarItems.addEventListener('click', async(e) => {
        const element = e.target.localName
        if (element === 'a') {
            const category = e.target.id
            const data = await getProductsByCategory(category)
            createCard(data.products)
            createPagination(data.current, data.pages)
        }
    })

    const pagination = document.getElementById('pagination')
    pagination.addEventListener('click', async(e) => {
        e.preventDefault()
        const element = e.target.localName
        if (element === 'a') {
            const page = e.target.innerText
            const data = await getProductsPerPage(page)
            console.log(data);
            createCard(data.products)
            createPagination(data.current, data.pages)
        }
    })
}



window.addEventListener('DOMContentLoaded', async(e) => {
    await main()
})