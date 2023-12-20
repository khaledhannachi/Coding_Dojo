// bubbleSort()
/* 
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//               j
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
function bubbleSort(nums) { 
    for (let i=0; i<nums.length; i++){
        for (let j=nums[i] ; j<nums.length ; j++){
        let big=nums[j];
        if(nums[j]<nums[j+1]){
            nums[j]=nums[j+1]
            nums[j]=big
        } 
        }
    }
return nums
}

console.log(bubbleSort(nums1));
