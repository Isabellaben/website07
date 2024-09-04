window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const productsURI = "https://kea-alt-del.dk/t7/api/products?category=" + category;

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
    clone.querySelector("h6").textContent = product.category;
    clone.querySelector("h4").textContent = product.brandname + " || " + product.articletype;
    clone.querySelector("p").textContent = product.price + ",-";
    clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    clone.querySelector("img").alt = product.productdisplayname; 
    clone.querySelector("a").href = `produkt.html?id=${product.id}`; 


    if (product.soldout) {
        clone.querySelector("article").classList.add("soldOut"); 
    }

    if (product.discount) {
        clone.querySelector("article").classList.add("onSale"); 
        clone.querySelector(".discounted p span").textContent = "Nu " + Math.round(product.price - (product.price * product.discount) / 100) + ",- ";
        clone.querySelector(".discounted p+p span").textContent = product.discount + "%"; 
    }


    productList.appendChild(clone);
      
}





