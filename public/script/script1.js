let products = [
    'cap1',
    'cap1',
    'cap1',
    'cap1',
    'cap1',
]

startProducts()
function startProducts(){
    initializeProducts(createProducts())
}

function initializeProducts(caps){
    let products = document.querySelector('.products')

    caps.forEach((cap) => {
        let createElement = document.createElement('div')
        createElement.id = cap.id
        createElement.classList.add('container-products')
        createElement.dataset.icon = cap.icon
        
        createObjects(cap, createElement)

        products.appendChild(createElement)
    })
}

function createObjects(cap, createElement){
    let capImage = document.createElement('div')

    let image = document.createElement('img')
    image.classList.add('cap')
    image.src = './img/'+ cap.icon + '.jpg'

    let desc = document.createElement('p')
    desc.classList.add('desc')
    desc.innerHTML = 'teste1'
    
    let price = document.createElement('p')
    price.classList.add('price')
    price.innerHTML = 'teste2'

    capImage.appendChild(image)
    capImage.appendChild(desc)
    capImage.appendChild(price)

    createElement.appendChild(capImage)
}

function createProducts(){
    let caps = []
    
    products.forEach((product) => {
        caps.push(createFaceProducts(product))
    })

    caps = caps.flatMap(pair => pair)
    return caps
}

function createFaceProducts(product){
    return [
        {
            id: createIdFromProducts(product),
            icon: product
        }
    ]
}

function createIdFromProducts(product){
    return product + parseInt(Math.random() * 1000)
}