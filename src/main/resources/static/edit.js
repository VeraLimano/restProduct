document.getElementById("editPR").addEventListener("submit", edit);

function edit(e) {
    e.preventDefault();

    let idPr = document.getElementById("idED").value;
    let namePr = document.getElementById("nameED").value;
    let pricePr = document.getElementById("priceED").value;

    fetch("http://localhost:8080/productsEdit", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: idPr,
            name: namePr,
            price: pricePr,
        })
    })
        .finally(() => {
            document.getElementById("table").click();
            getAll();
            document.getElementById("editPR").reset();
        })
}

// edit();