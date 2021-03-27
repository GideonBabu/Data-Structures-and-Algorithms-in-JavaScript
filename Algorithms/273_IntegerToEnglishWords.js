function one(num) {
    switch (num) {
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "";
    }
}

function twoLessThan20(num) {
    switch (num) {
        case 10: return "Ten";
        case 11: return "Eleven";
        case 12: return "Twelve";
        case 13: return "Thirteen";
        case 14: return "Fourteen";
        case 15: return "Fifteen";
        case 16: return "Sixteen";
        case 17: return "Seventeen";
        case 18: return "Eighteen";
        case 19: return "Nineteen";
        default: return "";
    }
}

function ten(num) {
    switch (num) {
        case 20: return "Twenty";
        case 30: return "Thirty";
        case 40: return "Fourty";
        case 50: return "Fifty";
        case 60: return "Sixty";
        case 70: return "Seventy";
        case 80: return "Eighty";
        case 90: return "Ninety";
        default: return "";
    }
}

function two(num) {
    if (num === 0) return "";
    
    if (num < 10) return one(num);
    
    if (num < 20) return twoLessThan20(num);
    
    let tens = Math.floor(num / 10) * 10;
    let rest = Math.floor(num % 10);
    
    if (tens !== 0 && rest !== 0) 
        return ten(tens) + " " + one(rest);
    
    if (tens === 0 && rest !== 0) 
        return one(rest);
    
    if (tens !== 0 && rest === 0) 
        return ten(tens);
}

function three(num) {
    let hundreds = Math.floor(num / 100);
    let rest = num % 100;

    if (hundreds !== 0 && rest !== 0) 
        return one(hundreds) + " Hundred " + two(rest);
    
    if (hundreds === 0 && rest !== 0)
        return two(rest);
    
    if (hundreds !== 0 && rest === 0) 
        return one(hundreds) + " Hundred";
}



/**
 * @param {number} num
 * @return {string}
 Time complexity : O(N). Intuitively the output is proportional to the number N of digits in the input.
Space complexity : O(1) since the output is just a string.
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";
    
    // billions
    let B = Math.floor(num / 1000000000);
    // millions
    let M = Math.floor((num - B * 1000000000) / 1000000);
    //Thousands
    let T = Math.floor((num - B * 1000000000 - M * 1000000) / 1000);
    
    let rest = num - B * 1000000000 - M * 1000000 - T * 1000;
    
    let words = "";
    
    if (B !== 0) {
        words = three(B) + " Billion";   
    }
    
    if (M !== 0) {
        if (words.length) words += " ";
        words += three(M) + " Million";
    }
    
    if (T !== 0) {
        if (words.length) words += " ";
        words += three(T) + " Thousand";
    }
    
    if (rest !== 0) {
        if (words.length) words += " ";
        words += three(rest);
    }
    
    return words;
    
};
