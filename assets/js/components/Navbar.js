const createNavItem = (items) => {
    const categoriesList = document.getElementById('categories-list');
    categoriesList.innerHTML = '';
    items.forEach(element => {
        const li = document.createElement('li')
        li.classList.add('nav-item')
        li.innerHTML += `
        <a class="nav-link active" aria-current="page" href="#" id="${element.id}">${element.name.toUpperCase()}</a>
        `
        categoriesList.appendChild(li)
    })
}

module.export = { createNavItem }