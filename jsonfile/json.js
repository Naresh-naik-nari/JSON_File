function addData() {
    var Name = document.getElementById("Name");
    var PhoneNo = document.getElementById("PhoneNo");
    var Address = document.getElementById("Address");
    var City = document.getElementById("City");
    var State = document.getElementById("State")
    postData(Name, PhoneNo, Address, City, State)
}
function postData(Name, PhoneNo, Address, City, State) {
    var url = "https://ahead-fog-need.glitch.me/Employee"
    var Data = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "Name": Name.value,
            "PhoneNo": PhoneNo.value,
            "Address": Address.value,
            "City": City.value,
            "State": State.value
        })
    }
    fetch(url, Data)
        .then(res => {
            if (res.ok) {
                console.log("Data Added....")
                displayData();
                alert("Data added successfully....")
                Name.value = "";
                PhoneNo.value = "";
                Address.value = "";
                City.value = "";
                State.value = ""
            }
        })
        .catch(err => {
            alert("Something fishy....")
            console.error(err)
        })
}
function displayData() {
    var container = document.getElementById("container")
    fetch("https://ahead-fog-need.glitch.me/Employee")
        .then(Response => Response.json())
        .then(res => {
            for (var obj of res) {
                // create element for every new object
                var item = document.createElement("div")
                item.className = "item m-2 p-4 text-uppercase border border-success rounded rounded-2"

                // call the employees detiles in para
                var Namepara = document.createElement("p")
                var PhoneNopara = document.createElement("p")
                var Addresspara = document.createElement("p")
                var Citypara = document.createElement("p")
                var Statepara = document.createElement("p")

                // Accessing the data from obj=>naresh,make war not war
                var { Name, PhoneNo, Address, City, State } = obj;

                // adding the data in paragraph
                Namepara.innerText = Name;
                PhoneNopara.innerTex = PhoneNo;
                Addresspara.innerText = Address;
                Citypara.innerText = City;
                Statepara.innerText = State;

                // adding paragraph into item <div class="item"</div>
                item.appendChild(Namepara)
                item.appendChild(PhoneNopara)
                item.appendChild(Addresspara)
                item.appendChild(Citypara)
                item.appendChild(Statepara)

                container.appendChild(item);
            }
        })
}
displayData();