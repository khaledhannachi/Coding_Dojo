var arrA =[1,3,4,5];
var arrB=[1,3,3,5,8,10];



function mergeDedupe(arr1, arr2){
    var newarr=arr1;
    for (var i=0; i<arr1.length; i++){
           
            
    for (var i=0; i<arr1.length; i++){
            for(var j=0; j<arr2.length; j++){
            if(arr2[j]!== arr1[i]);{
            newarr.push(arr2[j]);
            }
        }
       

        }
    
        
    
return newarr
}
console.log(mergeDedupe(arrA, arrB));