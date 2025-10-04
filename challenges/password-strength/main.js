function checkStrength(password) {
  let numOfRulesMet = 0
  numOfRulesMet = isRequiredLength(password) ? numOfRulesMet + 1 : numOfRulesMet
  return numOfRulesMet;
}

function isRequiredLength(password) {
  const requiredLength = 8
  if (!password) return false
  return password.length >= requiredLength
}



console.log(checkStrength('12345678'))