// Leetcode 29. Divide Two Integers
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // Edge Cases
    if( divisor === 0 ) { return Infinity };
    if( dividend === 0 ) { return 0 };
    if( divisor === -1 ) { return -dividend === 2147483648 ? 2147483647 : -dividend};
    if( divisor === 1 ) { return dividend };

    // Find Sign
    const isPositive = Math.sign(dividend) === Math.sign(divisor);
    let posDivid = Math.abs(dividend);
    let posDivis = Math.abs(divisor);
    let count = 0;

    while( posDivid - posDivis >= 0) {
        posDivid -= posDivis;
        count++;
    }


    return isPositive ? count : -count;
};


// Leetcode 35. Search Inset Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // Edge Cases
    if( target > nums[nums.length - 1]) { return nums.length };
    if( target < nums[0]) {return 0};
    
    // Define left right and middle of array for check
    let low = 0;
    let high = nums.length - 1;
    let mid;
    while( high >= low ) {
        // Define middle of high and low
        mid = low + Math.floor((high - low) / 2);

        // Return the mid value where the target should go
        if( target === nums[mid]) { return mid; }
        if( target >= nums[mid] && target <= nums[mid + 1] ) { return mid + 1; }
        
        // Alter high and low values and repeat till correct mid value found;
        if( target > nums[mid] ) {
            low = mid;
        } else {
            high = mid;
        }
    }
    //return mid;
};