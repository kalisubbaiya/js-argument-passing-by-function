//1.
num=(a)=>5+a;
console.log(num(5));

sum=(a,b)=> a+b+num(5);
console.log(sum(10,20));

//2.
sub=(a=10,b=12)=> sum(12,23)+a-b;
console.log(sub());

//3.
sum1=(a,b,c=a+b)=> c+sub(5,6);
console.log(sum1(10,20));

//4.
sum2=(a=3,b=2,c=5)=> a+b+c*sum1(5,4);
console.log(sum2());

//5.
sum3=(a=3,b=2,c=5)=> (a+b+c)/sum2(5,4);
console.log(sum3(2,3,4));

//6.
sum4=(a=3,b=2)=> a+b-sum3(5,4);
console.log(sum4());

//7.
sum5=(a=3,b=2,c=5)=> a+b+c*sum4(5,4);
console.log(sum5());

//8.
sum6=(a,b)=> a+b*sum5(5,4);
console.log(sum6(10,5));

//9.
sum7=(a=3,b=2,c=5)=> a+b+c*sum2(5,4);
console.log(sum7(10,20,30));

//10.
sum8=(a=3,b=2,c=5)=> a+b+c*sum7(5,4);
console.log(sum8(12,10));