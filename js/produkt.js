/* const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id"); */


const id = 1551;
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct(){
    fetch(url)
    .then((res) => res.json())
    .then(visProduct);
}

function visProduct(product){
    document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
    document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
    document.querySelector("img").alt = product.productdisplayname;
}

getProduct();