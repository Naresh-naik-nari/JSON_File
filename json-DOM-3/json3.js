let container = document.createElement("div")
container.className = "container"
let url = "https://nimble-plume-chicory.glitch.me/items"

let titleInput = document.getElementById("title")
let priceInput = document.getElementById("price")
let descriptionInput = document.getElementById("description")
let idInput = document.getElementById("id")
let btn = document.getElementById("btn")

btn.addEventListener("click", async function () {
    if (titleInput.value == '' || priceInput.value == '' || descriptionInput.value == '') {
        alert("Enter Data properiy")
    } else {
        let method = idInput.value ? "PUT" : "POST"
        let mainurl = (method == "put") ? `${url}/${idInput.value}` : url;
        let res = await fetch(mainurl, {
            method,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "title": titleInput.value,
                "price": priceInput.value,
                "description": descriptionInput.value
            })
        })
        if (res.ok) {
            getData();
            alert((method == "PUT") ? "Data Update" : "Data Added");
            titleInput.value = '';
            priceInput.value = '';
            descriptionInput.value = '';
            idInput.value = '';
            imageInput.value=''
        }

    }
})


let loader = document.getElementById("loader")
async function getData() {
    let res = await fetch(url)
    if (res.ok) {
        let data = await res.json();
        displayData(data)
    }
}
function displayData(products) {
    container.innerHTML = "";
    products.forEach(obj => {
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML = `
        <img src='${obj.image}' class='image'>
        <p class='title'>${obj.title}</p>
        <p class='price'>Price:${obj.price}</p>
        <p class='description'>${obj.description}</p>
        <button onclick=deleteData('${obj.id}') class='btn btn-danger'>Delete</button>
        <button onclick=updateData('${obj.id}') class='btn btn-warning'>update</button>
        `;
        loader.remove();
        container.appendChild(item)

    });
    document.body.appendChild(container)
}
async function updateData(id) {
    let res = await fetch(`${url}/${id}`)
    let obj = await res.json();

    titleInput.value = obj.title;
    priceInput.value = obj.price;
    descriptionInput.value = obj.description;
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
}
async function deleteData(id) {
    try {
        let options = {
            "method": "DELETE"
        }
        let res = await fetch(`${url}/${id}`, options)
        if (res.ok) {
            getData();
            alert("Data Deleted")
        }
    } catch (err) {
        console.error(err)
    }
}
getData();
