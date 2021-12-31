let carousel = document.querySelector('.carousel')

async function updatePost(){
        let resposta = await fetch('http://localhost:3000/api/all')
        let objetos = await resposta.json()
        let posts = JSON.parse(objetos)
        
        let postElements = ''
    
        posts.forEach((post) => {
    
            let postElement = `<div class="container-products" id="${post.icon + idProduct()}">
                                    <img src="./img/${post.icon}.jpg" alt="${post.icon}" class="cap">
                                    <p class="desc">${post.title}</p>
                                    <p class="old-price">R$${post.oldprice}</p>
                                    <p class="price">R$${post.price}</p>
                                </div>`
            postElements += postElement
        })
        let mural = document.querySelector('.carousel')
        mural.innerHTML =  postElements
}

price()

async function price (){
    await updatePost()

    let prices = document.getElementsByClassName('price')
    for(let i = 0; i < prices.length; i++){
        let price = prices[i]
        price.addEventListener('click', (event) => {
            let clicado = event.target
            console.log(clicado)
        })
    }
}

function idProduct(){
    return Math.random().toString(36).substr(2, 9)
} 

function rightbtn(){
    carousel.scrollLeft += carousel.offsetWidth
}

function leftbtn(){
    carousel.scrollLeft -= carousel.offsetWidth
}

skeleton()

function skeleton(){
    let carousel = document.querySelector('.carousel')
    let containerProducts = document.querySelector('.container-products')
    
    for (let i=0 ; i <10 ; i++){
        let elementoClone = containerProducts.cloneNode(true);
        carousel.appendChild(elementoClone)
    }
}

function carrinhoCompras () {
    carousel.addEventListener('click', (event) => {
        let clicado = event.target
        let carrinho = document.querySelector('.carrinho')
        let close = document.querySelector('.carrinho-icon')
        if(clicado.className.toLowerCase() == 'price'){
            carrinho.classList.add('mostra-carrinho')
            
        }
        close.addEventListener('click', () => {
            carrinho.classList.remove('mostra-carrinho')
        })
    })
}

function removeCompra (){
    let botaoRemove = document.getElementsByClassName('item-remover')
    for(let i = 0; i < botaoRemove.length; i++){
        let botao = botaoRemove[i]
        botao.addEventListener('click', (event) => {
            let clicado = event.target
            clicado.parentElement.remove()
        })
    }
}

function atualizaTotal () {
    let carrinho = document.querySelector('.carrinho')
    let carros = carrinho.getElementsByClassName('carrinho-itens')
    let total = 0
    for(let i = 0; i < carros.length; i++){
        let carro = carros[i]
        let priceElement = carro.querySelector('.item-valor')
        let quantidadeElement = carro.querySelector('.item-quantidade')
        let quantidade = quantidadeElement.value
        let price = parseFloat(priceElement.innerText.replace('R$', ""))
        total = total + (price * quantidade)
    }
    let geral = document.querySelector('.total')
    geral.innerText = 'Total = ' + total
}

function finaliza () {
    let finaliza = document.querySelector('.finalizar')
    finaliza.addEventListener('click', ()=> {
        atualizaTotal()
    })
}