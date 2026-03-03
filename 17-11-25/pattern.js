string = ""
n=4
for (let i = n; i > -1; i--) {
    let j
    for (j = 0; j < i; j++) {
        string=string+" "
    }
    string=string+"*"
    // for (let k = 0; k <n-j ; k++) {
    //     string=string+"*"
    // }
    string=string+"\n" 
}
for (let i = 1; i <n; i++) {
    let j
    for (j = 0; j < i; j++) {
        string=string+" "
    }
    string=string+"*"
    string=string+"\n"
   
}
console.log(string);