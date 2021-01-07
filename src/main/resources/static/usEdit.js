document.getElementById("editUser").addEventListener("submit", edit);

function edit(e) {
    e.preventDefault();

    let rolesU = [];
    let idU = document.getElementById("id3").value;
    let nameU = document.getElementById("name3").value;
    let surnameU = document.getElementById("surname3").value;
    let ageU = document.getElementById("age3").value;
    let emailU = document.getElementById("email3").value;
    let passwordU = document.getElementById("password3").value;
    rolesU = setRoles(Array.from(document.getElementById("role3").selectedOptions)
        .map(option => option.value));

    console.log(rolesU)

    fetch("http://localhost:8080/usersEdit", {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            id: idU,
            name: nameU,
            surname: surnameU,
            age: ageU,
            email: emailU,
            password: passwordU,
            roles: rolesU

        })
    })
        .finally(() => {
            document.getElementById("table").click();
            getAll();
            document.getElementById("editUser").reset();
        })
}

// function setRoles(someRoles) {
//     let roles = [];
//     if (someRoles.indexOf("ROLE_USER") >= 0) {
//         roles.push({"id": 1, "name": "ROLE_USER"});
//     }
//     if (someRoles.indexOf("ROLE_ADMIN") >= 0) {
//         roles.push({"id": 2, "name": "ROLE_ADMIN"});
//     }
//     return roles;
// }