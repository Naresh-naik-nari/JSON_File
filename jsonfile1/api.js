let container = document.createElement("div")
container.className = "container"

let loader=document.getElementById("loader")
function fetchData() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data =>displayData(data))
        .catch(err => {
            console.error(err)
        })
}

function displayData(products) {
    for (let obj of products) {
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML = `
             <img src='${obj.image}' class='image'>
             <p class='title'>${obj.title}</p>
             <p class='description'>${obj.description}</p>
             <span>${obj.price}</span>
             <p class='rating'>${obj.rating.rate}</p>   
        `;
        container.appendChild(item)
    }
    loader.remove();
    document.body.appendChild(container)

}
fetchData();