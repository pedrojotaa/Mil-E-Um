let carousel = document.querySelector('.carousel')

//CRIAÇÃO DOS PRODUTOS AUTOMATICA
updatePost()

async function updatePost() {
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
    mural.innerHTML = postElements
}

function idProduct() {
    return Math.random().toString(36).substr(2, 9)
}

//CARRINHO DE COMPRAS
adicionaProduto()
removeDoCarrinho()


async function adicionaProduto() {
    await updatePost()

    let botaoDeCompra = document.querySelectorAll('.price')
    for (let i = 0; i < botaoDeCompra.length; i++) {
        let botao = botaoDeCompra[i]
        botao.addEventListener('click', (event) => {
            event.preventDefault()
            let botaoClicado = event.target
            let telaCarrinhoCompras = document.querySelector('.carrinho')
            if (telaCarrinhoCompras.className.toLowerCase() !== 'mostra-carrinho') {
                telaCarrinhoCompras.classList.add('mostra-carrinho')
                adicionaCarrinho(botaoClicado)
            }
            if (telaCarrinhoCompras.className.toLowerCase() == 'mostra-carrinho') {
                adicionaCarrinho(botaoClicado)
            }
        })
    }
}

function adicionaCarrinho(botaoClicado) {
    let produto = botaoClicado.parentElement
    let img = produto.querySelector('.cap').src
    let desc = produto.querySelector('.desc').innerText
    let price = produto.querySelector('.price').innerText

    let post = `<div class="carrinho-itens">
                    <img src="${img}" class="item-imagem">
                    <p class="item-nome">${desc}</p>
                    <p class="item-valor">${price}</p>
                    <input type="number" value="1" class="item-quantidade">
                    <button class="item-remover">Remover</button>
                </div>`
    let carrinho = document.querySelector('.carrinho-produtos')
    carrinho.innerHTML += post
    atualizaTotal()
}

function removeDoCarrinho() {
   let telaCarrinho = document.querySelector('.carrinho')

    telaCarrinho.addEventListener('click', (event) => {
        let botaoClicado = event.target
        if(botaoClicado.className.toLowerCase() == 'item-remover'){
            botaoClicado.parentElement.remove()
            atualizaTotal()
        }
    }) 
}

function atualizaTotal() {
    let carrinho = document.querySelector('.carrinho')
    let compras = carrinho.getElementsByClassName('carrinho-itens')
    let total = 0
    for (let i = 0; i < compras.length; i++) {
        let carro = compras[i]
        let priceElement = carro.querySelector('.item-valor')
        let quantidadeElement = carro.querySelector('.item-quantidade')
        let quantidade = quantidadeElement.value
        let price = parseFloat(priceElement.innerText.replace('R$', ""))
        total = total + (price * quantidade)
    }
    let geral = document.querySelector('.total')
    geral.innerText = 'Total = ' + total
}

function finalizaCompra() {
    let finaliza = document.querySelector('.finalizar')
    finaliza.addEventListener('click', () => {
        atualizaTotal()
    })
}

//BOTAO PARA ABRIR E FECHAR CARRINHO

abreFechaCarrinho()

function abreFechaCarrinho() {
    let close = document.querySelector('.carrinho-icon')
    let carrinho = document.querySelector('.carrinho')
    close.addEventListener('click', () => {
        if (carrinho.className.toLowerCase() == 'carrinho') {
            carrinho.classList.add('mostra-carrinho')
        } else {
            carrinho.classList.remove('mostra-carrinho')
        }
    })
}

//BOTOES CAROUSEL

rightbtn()
leftbtn()

function rightbtn() {
    carousel.scrollLeft += carousel.offsetWidth
}

function leftbtn() {
    carousel.scrollLeft -= carousel.offsetWidth
}

//ANIMAÇÃO SKELETON
skeleton()

function skeleton() {
    let carousel = document.querySelector('.carousel')
    let containerProducts = document.querySelector('.container-products')

    for (let i = 0; i < 10; i++) {
        let elementoClone = containerProducts.cloneNode(true);
        carousel.appendChild(elementoClone)
    }
}