let products = [
    { 
        name: 'White Cap',
        desc: 'Bone da nova coleção verão',
        price: '50',
        id: createIdFromProducts(),
        icon: 'cap1'
    },
    { 
        name: 'logo Cap',
        desc: 'logo da marca',
        price: '1500',
        id: createIdFromProducts(),
        icon: 'logo'
    }
]

startProducts()
function startProducts(){
    initializeProducts(createProduct())
}

function initializeProducts(products){
    let container = document.querySelector('.products')

    products.forEach((product) => {
        let createElement = document.createElement('div')
        createElement.id = product.id
        createElement.classList.add('container-products')
        createElement.dataset.icon = product.icon
        
        createObjects(product, createElement)
        
        container.appendChild(createElement)
    })
}

function createObjects(product, createElement){
    let container = document.createElement('div')

    let image = document.createElement('img')
    image.classList.add('cap')
    image.src = './img/'+ product.icon + '.jpg'

    let desc = document.createElement('p')
    desc.classList.add('desc')
    desc.innerHTML = product.desc
    
    let price = document.createElement('p')
    price.classList.add('price')
    price.innerHTML = `R$ ${product.price}`

    container.appendChild(image)
    container.appendChild(desc)
    container.appendChild(price)

    createElement.appendChild(container)
}

function createProduct(){
    let a = []

    products.forEach((product) => {
        a.push(product)
    })
    
    return a
}

function createIdFromProducts(){
    return parseInt(Math.random() * 1000)
}