const createPagination = (current, pages) => {
    const pagination = document.getElementById('pagination')
    pagination.innerHTML = ''
    for (let i = 1; i <= pages; i++) {
        const li = document.createElement('li')
        li.classList.add('page-item')
        const a = document.createElement('a')
        a.setAttribute('href', '#')
        a.classList.add('page-link')
        a.innerText = i
        li.appendChild(a)
        pagination.appendChild(li)

        if (i === current) {
            a.classList.add('active')
        }
    }
}



export { createPagination }