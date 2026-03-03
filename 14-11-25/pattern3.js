string = ""
n=5
for (let i = 1; i <n+1; i++){
    let j
    for (j = 1; j < i+1; j++) {
        string=string+"0"+j+" "
    }
    string=string+"\n"
}
console.log(string);