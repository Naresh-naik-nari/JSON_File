let container = document.getElementById("container")
let bt = document.getElementById("bt")

// click
bt.addEventListener('click', function () {

    let image = document.getElementById("image")
    let title = document.getElementById("title")
    let price = document.getElementById("price")
    let description = document.getElementById("description")
    if (title.value == "" || price.value == "" || description.value == "" || image.value == "") {
        alert("enter data")
    }
    else {
        let options = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "image": image.value,
                "title": title.value,
                "price": price.value,
                "description": description.value
            })
        }
        fetch("http://localhost:3000/products", options)
            .then(res => {
                if (res.ok) {
                    image.value = "";
                    title.value = "";
                    price.value = "";
                    description.value = "";

                    getData(); // mandatory
                    alert("Data Added")
                }
            })
    }
})


let loader = document.getElementById("loader")
function getData() {
    fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(products) {
    container.innerHTML = ``;//mandatory
    products.forEach(obj => {
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML = `
        <img src='${obj.image}' class='image'>
        <p class='title'>${obj.title}</p>
        <p class='price'>${obj.price}</p>
        <p class='description'>${obj.description}</p>
        <button onclick=deleteData('${obj.id}') class='btn btn-danger'>Delete</button>
        `;
        loader.remove();
        container.appendChild(item)
    })
}
function deleteData(id) {
    console.log(id)
    let options = {
        "method": "DELETE"
    }
    fetch(`http://localhost:3000/products/${id}`, options)
        .then(res => {
            if (res.ok) {
                getData(); //mandatory
                alert("Data Delete");
            }
        })
        .catch(err => console.error(err))
}
getData();
