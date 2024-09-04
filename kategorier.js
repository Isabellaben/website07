

fetch ("https://kea-alt-del.dk/t7/api/categories")
    .then(res=>res.json())
    .then(showCategories)

function showCategories(cats){
    cats.forEach(showCategory)
}

function showCategory(cat){
    //fanger vores template
    const template = document.querySelector("template").content; 
    //cloner
    const clone = template.cloneNode(true);
    //ændrer indhold
    clone.querySelector("a").textContent = cat.category;
    clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;
    //appender
    document.querySelector(".kategoriliste ul").append(clone);
}



/* const categoryList = document.querySelector("#categoryList");
const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;
 

fetch("https://kea-alt-del.dk/t7/api/categories")
.then(response => response.json())
.then((categories) => {
    categories.forEach((category)=>{
        categoryList.innerHTML += `<li><a href="produktliste.html?category=${category.category}">${category.category}</a></li>`;
    })
});


if(params.has("category")){
    url = "https://kea-alt-del.dk/t7/api/products?category=" + category
}else{
    url = "https://kea-alt-del.dk/t7/api/products"
}
 */
