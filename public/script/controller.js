let carousel = document.querySelector('.carousel')

carrinhoCompras()

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

function rightbtn(){
    carousel.scrollLeft += carousel.offsetWidth
}

function leftbtn(){
    carousel.scrollLeft -= carousel.offsetWidth
}
