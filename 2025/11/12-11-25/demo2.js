let n = 124634,rev=0,t,d;
t=n;

while (t!=0) {
    d=t%10;
    t= Math.floor(t/10);
    rev= (rev * 10)+d;
}
console.log(rev);
