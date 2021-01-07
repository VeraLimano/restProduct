document.getElementById("deleteUser").addEventListener("submit", usDelete)

function usDelete(e) {
    e.preventDefault();

    let idPr = document.getElementById("idDEL").value;

    fetch("http://localhost:8080/usersDelete/" + idPr, {
        method: "DELETE"
    })
        .finally(() => {
            document.getElementById("table").click();
            getAll();
            document.getElementById("deleteUser").reset();
        })
}