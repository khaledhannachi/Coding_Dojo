const arr1 =[2,3,9,5,1,6];
    function insertionSort(nums) 
    {
    for (let i=1; i<nums.length; i++ ){
        let temp=nums[i];
        for (let j = nums[i-1]; j > nums[0]; j--); 
        {
        if (nums[j]>temp){
            nums[j+1]=nums[j];
        }
        else {(nums[j]=temp)};

        }
    };
    return nums
}
console.log(insertionSort(arr1))