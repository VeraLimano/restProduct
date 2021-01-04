async function getResponse() {
    let  response = await fetch('http://localhost:8080/products');
    let content = await response.json();
    console.log(content);
//
//     content = content.splice(0, 10);
//     console.log(content);
//     let list = document.querySelector('.post');
//     let key;
//
//     for (key in content) {
//         list.innerHTML +=
//             `<li class="post">
//                 <h4>${content[key].id}</h4>
//                 <h4>${content[key].name}</h4>
//                 <h4>${content[key].email}</h4>
//             </li>`
//     }
}
getResponse();

// fetch("http://localhost:8080/products")
//     .then((response) => {
//         return response.json();
//     })

// fetch("http://localhost:8080/products")
//     .then(res => res.json())
//     .then(data =>
//     document.getElementById('root').innerHTML =
//     JSON.stringify(data))

