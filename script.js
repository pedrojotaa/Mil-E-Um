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

    let imageElement = document.createElement('img')
    imageElement.classList.add('cap')
    imageElement.src = './img/'+ cap.icon + '.jpg'

    capImage.appendChild(imageElement)

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