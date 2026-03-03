let n = 12321,rev=0,t,d;
t=n;

while (t!=0) {
    d=t%10;
    t= Math.floor(t/10);
    rev= (rev * 10)+d;
}
if (rev===n) {
    console.log("Number is palindrome");
} else {
    console.log("Number is not palindrome");
}
