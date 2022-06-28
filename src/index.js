module.exports = function toReadable(number) { 

    let dict10 = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    };

    let dict20 = {
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    };

    let dict100 = {
        10: 'ten', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
    }

    let strNumber = String(number);

    if (strNumber.length === 1) {
        return (dict10[number]);
    } 
    
    if ((strNumber.length === 2) && (strNumber[0] === '1')) {
        return (dict20[number]);
    } else if ((strNumber.length === 2) && (strNumber[1] === '0')) {
        return (dict100[number]);
    } else if (strNumber.length === 2) {
        return (dict100[strNumber[0] + '0'] + ' ' + dict10[strNumber[1]]);
    } 


    if ((strNumber.length === 3) && (strNumber[1] === '0') && (strNumber[2] === '0')) {
        return (dict10[strNumber[0]] + ' hundred');
    }
    else if ((strNumber.length === 3) && (strNumber[1] === '0')) {
        return (dict10[strNumber[0]] + ' hundred ' + dict10[strNumber[2]]);
    } else if ((strNumber.length === 3) && (strNumber[2] === '0')) {
        return (dict10[strNumber[0]] + ' hundred ' + dict100[strNumber[1] + '0']);
    }
    else if ((strNumber.length === 3) && (strNumber[1] === '1')) {
        return (dict10[strNumber[0]] + ' hundred ' + dict20[strNumber[1] + strNumber[2]]);
    }
    else if (strNumber.length === 3) {
        return (dict10[strNumber[0]] + ' hundred ' + dict100[strNumber[1] + '0'] + ' ' + dict10[strNumber[2]]);
    }
 
}
