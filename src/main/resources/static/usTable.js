async function getAll() {
    fetch('http://localhost:8080/users')
        .then(response => {
            response.json().then(data => {

                let output = " ";
                // console.log(data)
                data.forEach(user => {

                    let userRoles = " ";
                    for (let i = 0; i < user.roles.length; i++) {
                        userRoles += `${user.roles[i].role} `
                    }
                    console.log(userRoles);

                    output += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${userRoles}</td>
                <td><button type="submit" class="btn btn-primary" id="editProduct">Edit</button></td>
                <td><button type="submit" class="btn btn-primary" id="deleteProduct">Delete</button></td>
                </tr>`
                })
                document.getElementById("table").innerHTML = output;
            })
        })
}

getAll();