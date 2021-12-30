let carousel = document.querySelector('.carousel')

carrinhoCompras()
removeCompra()
finaliza()

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

function rightbtn(){
    carousel.scrollLeft += carousel.offsetWidth
}

function leftbtn(){
    carousel.scrollLeft -= carousel.offsetWidth
}
