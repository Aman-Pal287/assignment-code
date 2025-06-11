//! 43. 2299. Strong Password Checker II

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    if (password.length < 8) return false
    const specials = "!@#$%^&*()-+";
    let hasLower = false, hasUpper = false, hasDigit = false, hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i)
        if (i > 0 && char === password[i - 1]) return false;
        if (char >= "a" && char <= "z") hasLower = true
        else if (char >= "A" && char <= "Z") hasUpper = true
        else if (char >= '0' && char <= '9') hasDigit = true
        else if (specials.includes(char)) {
            hasSpecial = true;
        }
    }
    return hasLower && hasUpper && hasDigit && hasSpecial
};