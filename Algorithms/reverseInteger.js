/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < -(Math.pow(2, 31)) || x > Math.pow(2, 31) - 1 || x === 0) {
        return 0;
    }
    
    let digit = 0;
    let reversed = 0;
    let negative = false;
    let numberArray = new Array();
    let inRange = true;

    if (x < 0) {
        negative = true;
        x = -(x);
    }

    while (x > 0) {
        const remainder = Math.floor(x % 10);        
        numberArray.push(remainder);   
        x = Math.floor(x / 10);
    }

    while (numberArray.length) {
      const pop = numberArray.pop();
      reversed += Math.pow(10, digit) * pop;
      digit++;
    }
    
    inRange = isInRange(reversed);

    return inRange ? (negative) ? -reversed : reversed : 0;
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isInRange = function(num) {        
    if (num < -(Math.pow(2, 31)) || num > Math.pow(2, 31) - 1) {
        return false;
    }

    return true;
}
