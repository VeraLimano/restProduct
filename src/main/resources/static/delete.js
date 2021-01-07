document.getElementById("deletePR").addEventListener("submit", deleteProduct)

function deleteProduct(e) {
    e.preventDefault();

    let id = document.getElementById("idDEL").value;

    fetch("http://localhost:8080/productsDelete/" + id, {
        method: "DELETE"
    })
        .finally(() => {
            document.getElementById("table").click();
            getAll();
            document.getElementById("deletePR").reset();
        })
}

// deleteProduct();