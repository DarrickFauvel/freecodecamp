/**
 * Check the strength of a given password string
 * @param {string} password 
 * @returns {boolean}
 */
function checkStrength(password) {
  // Check if no password given
  if (!password) return 0
  
  /**
   * Represent the number of required rules met
   * @type {number}
   */
  let numOfRulesMet = 0

  numOfRulesMet = hasRequiredLength(password) ? numOfRulesMet + 1 : numOfRulesMet
  numOfRulesMet = hasUppercaseAndLowercase(password) ? numOfRulesMet + 1 : numOfRulesMet
  numOfRulesMet = hasAtLeastOneNumber(password) ? numOfRulesMet + 1 : numOfRulesMet
  return numOfRulesMet;
}

function hasRequiredLength(password) {
  const requiredLength = 8
  return password.length >= requiredLength
}

function hasUppercaseAndLowercase(password) {
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  return hasUppercase && hasLowercase
}

function hasAtLeastOneNumber(password) {
  // Check for any digit [0-9]
  const hasNumber = /\d/.test(password)
  return hasNumber
}

console.log(checkStrength('DarrickF23'))
// console.log(hasAtLeastOneNumber('a'))