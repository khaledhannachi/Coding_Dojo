// 5!=5*4*3*2*1
function factorial(num){
if (num === 1){
    return;
}

var newnum=num+1
var fac=newnum*num

factorial(num-1)
return fac;
}

factorial(5)