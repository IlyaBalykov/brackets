module.exports = function check(str, bracketsConfig) {
    if (str.length !== 0 && str[str.length - 1] !== ("(" || "[" || "{") && !str.match(/\d/)) {
        while (str.match(/\(\)/g) || str.match(/\[\]/g) || str.match(/{}/g) || str.match(/\|\|/g)) {
            let checkOne = str.match(/\(\)/g) || [];
            let checkTwo = str.match(/\[\]/g) || [];
            let checkThree = str.match(/{}/g) || [];
            let checkFour = str.match(/\|\|/g) || [];
            if (checkOne.length !== 0) {
                str = str.replace(/\(\)/g, "");
            } else if (checkTwo.length !== 0) {
                str = str.replace(/\[\]/g, "");
            } else if (checkThree.length !== 0) {
                str = str.replace(/{}/g, "");
            } else if (checkFour.length !== 0) {
                str = str.replace(/\|\|/g, "");
            }
        }
        return !str.length;
    } else if (str.length !== 0 && str[str.length - 1] !== ("(" || "[" || "{") && str.match(/\d/)) {
        while (str.match(/12/g) || str.match(/34/g) || str.match(/56/g) || str.match(/77/g) || str.match(/88/g)) {
            let checkOneTwo = str.match(/12/g) || [];
            let checkThreeFour = str.match(/34/g) || [];
            let checkFiveSix = str.match(/56/g) || [];
            let checkSeven = str.match(/77/g) || [];
            let checkEight = str.match(/88/g) || [];
            if (checkOneTwo.length !== 0) {
                str = str.replace(/12/g, "");
            } else if (checkThreeFour.length !== 0) {
                str = str.replace(/34/g, "");
            } else if (checkFiveSix.length !== 0) {
                str = str.replace(/56/g, "");
            } else if (checkSeven.length !== 0) {
                str = str.replace(/77/g, "");
            } else if (checkEight.length !== 0) {
                str = str.replace(/88/g, "");
            }
        }
        return !str.length;
    } else
        return false
}