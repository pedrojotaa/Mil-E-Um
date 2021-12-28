updatePost()
skeleton()

function updatePost(){
    fetch('http://localhost:3000/api/all')
        .then(res => {
            return res.json()
        }).then(json => {

            let postElements = ''
             
            let posts = JSON.parse(json)

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
        })

}

function idProduct(){
    return Math.random().toString(36).substr(2, 9)
} 

function skeleton(){
    let carousel = document.querySelector('.carousel')
    let containerProducts = document.querySelector('.container-products')
    
    for (let i=0 ; i <10 ; i++){
        let elementoClone = containerProducts.cloneNode(true);
        carousel.appendChild(elementoClone)
    }
}
