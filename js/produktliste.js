fetch ("https://kea-alt-del.dk/t7/api/products ")
.then(res=>res.json())
.then(showProducts);


function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProducts);
}

function showProduct(products){
    console.log(product);
    //fang template
    const template = document.querySelector("#produktListeTemplate").textContent;
    //lav en kopi
    const copy = template.cloneNode(true); 
    //ændre indhold
    copy.querySelector("h3").textContent = product.productdisplayname;
     //appende
     document.querySelector("main").appendChild(copy);
}

/*     <section class="produktliste">
          <article>
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
              alt="Sahara Team India Fanwear"
            />
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="subtle">Tshirts | Nike</p>
            <p class="price">DKK 1595,-</p>
            <a href="produkt.html">Læs mere</a>
          </article>
            */

