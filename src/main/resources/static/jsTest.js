async function getAll() {
    fetch('http://localhost:8080/products')
        .then(response =>{
            response.json().then(data => {
                console.log(data);
                let output = "";

                data.forEach(pr=> {
                    output += `
                <tr>
                <td>${pr.id}</td>
                <td>${pr.name}</td>
                <td>${pr.price}</td>
                <td><button type="submit" class="btn btn-primary" id="editProduct">Edit</button></td>
                <td><button type="submit" class="btn btn-primary" id="deleteProduct">Delete</button></td>
                </tr>`
                })
                document.getElementById("table").innerHTML = output;
            })
        })

}

getAll();