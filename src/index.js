module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    for (let i = 0; i < str.length; i++) {
        if (openBracket(str[i]) && closeBracket(str[i]) && brackets[brackets.length - 1] !== str[i]) {
            brackets.push(str[i])
        }
        else if (openBracket(str[i]) && !closeBracket(str[i])) {
            brackets.push(str[i])
        }
        else if (closeBracket(str[i])) {
            if (checkBracket(str[i], brackets[brackets.length - 1])) {
                brackets.pop();
            }
            else return false
        }
    }
    return  (brackets.length === 0);

    function checkBracket(bracket, openBracket) {
        for (let array of bracketsConfig) {
            if (array[0] === openBracket && array[1] === bracket) {
                return true
            }
        }
        return false

    }

    function openBracket(bracket) {
        for (let array of bracketsConfig) {
            if (array[0] === bracket) {
                return true;
            }
        }
        return false
    }

    function closeBracket(bracket) {
        for (let array of bracketsConfig) {
            if (array[1] === bracket) {
                return true;
            }
        }
        return false;
    }
};