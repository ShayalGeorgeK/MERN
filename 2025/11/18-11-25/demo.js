// let demo=[1,2,3,4]

// let result = demo.map((value)=>{
//     return value*10
// })

// console.log(result);

// let demo=[
//     {name: "Shayal"},
//     {name: "George"},
//     {age: 233455}
// ]

let result = demo.map((value)=>{
    return value.name
})

// console.log(result);

function validate() {
    const username = document.getElementById('uname')
    const password = document.getElementById('pass')

    if(username.value===""||password.value===""){
        alert("fields must be filled")
        return false
    }
    return true
}