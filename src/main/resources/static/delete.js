document.getElementById("deletePR").addEventListener("submit", deleteProduct)

function deleteProduct(e) {
    e.preventDefault();

    let idPr = document.getElementById("idDEL").value;

    fetch("http://localhost:8080/productsDelete/" + idPr, {
        method: "DELETE"
    }).then(response=> {
        return response;
    })
        .finally(() => {
            document.getElementById("table").click();
            getAll();
            document.getElementById("deletePR").reset;
        })
}

// deleteProduct();