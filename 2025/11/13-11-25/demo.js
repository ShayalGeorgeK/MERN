// for (let i = 1; i <= 100; i++) {
//     console.log(i);  
// }
// let i = 1;
// do {
//    console.log(i);
//    i++;   
// } while (i<=100);

string = ""
n=4
for (let i = n; i > -1; i--) {
    let j
    for (j = 0; j < i; j++) {
        string=string+" "
    }
    for (let k = 0; k <n-j ; k++) {
            string=string+"*"
        }
    string=string+"\n"
}
console.log(string);
