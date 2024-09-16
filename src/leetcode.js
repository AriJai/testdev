// Leetcode 29. Divide Two Integers
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // Checking if dividend = divisor 
    if (dividend === divisor) { return 1; }

    // Checking for multiple negatives
    // if( dividend < 0 && divisor < 0 ) {
    //     dividend = -dividend;
    //     divisor = -divisor;
    // }

    // Checking for ranges [−2^31, 2^31 − 1]
    if( dividend >= 2147483648 ) { dividend = 2147483647; }
    if( dividend < -2147483648 ) { dividend = -2147483648; }

    // Checking for case where divisor is equal to 1 or -1, or dividend is equal to 0
    if( divisor === -1 ) {return -dividend;}
    else if ( divisor === 1 ) { return dividend; }
    else if (dividend === 0) { return 0; }

     // Solving for all other cases
    const isQuotientNegative = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);
    let positiveDividend = Math.abs(dividend);
    const positiveDivisor = Math.abs(divisor);
    let count = 0;

    while( positiveDividend - positiveDivisor >= 0) {
        positiveDividend -= positiveDivisor;
        count++;
    }

    return isQuotientNegative ? -count: count;
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


export const {divide, searchInsert} = leetCode;
