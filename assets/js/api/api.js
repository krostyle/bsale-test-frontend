const getProducts = async(name) => {
    return name ? await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/products?name=${name}`) : await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/products`)
}

const getProductsByCategory = async(category) => {
    const { data } = await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/categories/${category}/products`)
    return data
}


const getCategories = async() => {
    const { data } = await axios.get(`https://api-bsale-server.herokuapp.com/api/v1/categories`)
    return data
}


module.export = { getProducts, getProductsByCategory, getCategories }