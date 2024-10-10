// FIRST
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; 
        num = Math.floor(num / 10);  
    }
    return sum;
}

// SECOND
function productOfDigits(num) {
    let product = 1;
    if (num === 0) return 0;  
    while (num > 0) {
        product *= num % 10;  
        num = Math.floor(num / 10);  
    }
    return product;
}

// THIRD
function calculateProductAndSum(num) {
    if (num === 0) {
        return "Cannot calculate.";
    }

    let sum = 0;
    let product = 1;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        product *= digit;
        num = Math.floor(num / 10);
    }

    if (product % sum === 0) {
        return "Quotient is " + (product / sum) + ".";
    } else {
        return "Remainder is " + (product % sum) + ".";
    }
}