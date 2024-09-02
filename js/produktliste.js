window.addEventListener("DOMContentLoaded", init);

const productsURI = "https://kea-alt-del.dk/t7/api/products?limit=50";


let productList;
let productTemplate;

function init (){
    productList = document.querySelector("#product_list");
    console.log("productList", productList);
    
    productTemplate = document.querySelector("template").content;
    console.log("productTemplate", productTemplate);


    fetch(productsURI)
    .then((response) => {
        console.log("response", response);
        return response.json();
    })
    
    .then(logJSON);
}

function logJSON(json){
    console.log("json", json);
    json.forEach(showProduct);
}

function showProduct(product){
    const clone = productTemplate.cloneNode(true);
    clone.querySelector("h3").textContent = product.productdisplayname;
    clone.querySelector("h5").textContent = product.season;
    clone.querySelector("h4").textContent = product.brandname + " || " + product.articletype;
    clone.querySelector("p").textContent = product.price + ",-";

    productList.appendChild(clone);
}