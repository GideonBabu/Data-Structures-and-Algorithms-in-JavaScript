/**
 * time: O(log ^ 2 * n) where n is the dividend in the worst case when divisor is 1
 * space: O(1)
 */
var divide = function(dividend, divisor) {

    // Special case: overflow.
    if (dividend == -Math.pow(2, 31) && divisor == -1) {
        return Math.pow(2,31) - 1;
    }

    /* We need to convert both numbers to negatives
     * for the reasons explained above.
     * Also, we count the number of negatives signs. */
    let negatives = 2;
    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }

    /* Count how many times the divisor has to be added
     * to get the dividend. This is the quotient. */
    let quotient = 0;
    
    const HALF_INT_MIN = -Math.floor(Math.pow(2, 31) / 2);
    
    while (dividend <= divisor) {
        
        let powerOfTwo = -1;
        
        let value = divisor;
        while (value >= HALF_INT_MIN && value + value >= dividend) {
            value += value;
            powerOfTwo += powerOfTwo;
        }
        
        
        quotient += powerOfTwo;
        dividend -= value;
    }

    /* If there was originally one negative sign, then
     * the quotient remains negative. Otherwise, switch
     * it to positive. */
    if (negatives != 1) {
        quotient = -quotient;
    }
    return quotient;
}




/**
 * time: O(n) where n is the dividend in the worst case when divisor is 1
 * space: O(1)
 */
var divide = function(dividend, divisor) {

    // Special case: overflow.
    if (dividend == -Math.pow(2, 31) && divisor == -1) {
        return Math.pow(2,31) - 1;
    }

    /* We need to convert both numbers to negatives
     * for the reasons explained above.
     * Also, we count the number of negatives signs. */
    let negatives = 2;
    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }

    /* Count how many times the divisor has to be added
     * to get the dividend. This is the quotient. */
    let quotient = 0;
    
    while (dividend - divisor <= 0) {
        quotient--;
        dividend -= divisor;
    }

    /* If there was originally one negative sign, then
     * the quotient remains negative. Otherwise, switch
     * it to positive. */
    if (negatives != 1) {
        quotient = -quotient;
    }
    return quotient;
}
