document.getElementById("add").addEventListener("submit", add);

function add(e) {
    e.preventDefault();

    let namePr = document.getElementById("name2").value;
    let pricePr = document.getElementById("price2").value;

    fetch("http://localhost:8080/productsAdd", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            name: namePr,
            price: pricePr,
        })
    }).then(response=> {
        return response;
    })
        .finally(() => {
            document.getElementById("table").click();
            getAll();
            document.getElementById("add").reset();
        })
}

// add();