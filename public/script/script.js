document.addEventListener('DOMContentLoaded', ()=> {
    updatePost()
})

function updatePost(){
    fetch('http://192.168.1.109:3000/api/all')
        .then(res => {
            return res.json()
        }).then(json => {

            let postElements = ''
             
            let posts = JSON.parse(json)

            posts.forEach((post) => {

                let postElement = `<div class="container-products" id="${post.id}">
                                        <img src="./img/${post.icon}.jpg" alt="${post.icon}" class="cap">
                                        <p class="desc">${post.title}</p>
                                        <p class="price">R$${post.price}</p>
                                    </div>`
                postElements += postElement
            })
            let mural = document.querySelector('.products')
            mural.innerHTML = postElements
        })
}