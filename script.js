let featuredItems = document.querySelector("#featured-items .content");

function showFeatured (data, start, stop) {
    for(let i = start; i < stop; i++) {
        featuredItems.insertAdjacentHTML('beforeend', `
        <div class="items">
        <div class="img-box">
            <img class = "cart-img" src="/img/${data[i].img}" alt="">
            <div class = "add-to-cart">
                <img src="/img/shopcartwhite.png" alt="">
                <p>Add to Cart</p>
            </div>
        </div>
        <p class="description">${data[i].name}</p>
        <p class="price">${data[i].price}</p>
        </div>
        `);
    }
}

showFeatured(data, 0, data.length);
