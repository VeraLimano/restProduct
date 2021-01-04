function cuadric(a, b, c) {
    let D = null,
        x1 = null,
        x2 = null

    D = (b * b) - (4 * a *c);

    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);

    return {
        D: D,
        x1: x1,
        x2: x2
    }
}

document.querySelector('.push').onclick = function (e) {
    e.preventDefault()

    let a = document.querySelector('.a').value,
        b = document.querySelector('.b').value,
        c = document.querySelector('.c').value

    let result = cuadric(a, b, c)

    // console.log(result.D);
    document.querySelector('.D').innerText = result.D
    document.querySelector('.X1').innerText = result.x1
    document.querySelector('.X2').innerText = result.x2
}









// let apples = "or";
// let oranges = "ap";
// let names = "Anna"
//
// // alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5
//
// let name = ["Tom", "Jerry", "Anna", "Jim", "Den"];
// for (let i = 0; i < name.length; i++) {
//     document.querySelector('.list').innerHTML += `<li>${name[i]}</li>`;
// }
//
// for (let key in name) {
//     document.querySelector('.list').innerHTML += `<li>${name[key]}`;
// }
//
// console.log(`name ${name[2]}`)
//
// let users = [
//     {
//         name: "Roma",
//         age: 22,
//         skill: "Java"
//     },
//     {
//         name: "Anna",
//         age: 20,
//         skill: "JC"
//     },
//     {
//         name: "Tom",
//         age: 25,
//         skill: "Java"
//     }
// ]
//
// for (let key in name) {
//     document.querySelector('.list').innerHTML += `<li>name  ${users[key].name}  age  ${users[key].age}</li>`;
// }

