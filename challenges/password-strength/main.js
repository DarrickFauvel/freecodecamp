function checkStrength(password) {
  // Check if no password given
  if (!password) return 0;

  let numOfRulesMet = 0;

  numOfRulesMet = hasRequiredLength(password)
    ? numOfRulesMet + 1
    : numOfRulesMet;
  numOfRulesMet = hasUppercaseAndLowercase(password)
    ? numOfRulesMet + 1
    : numOfRulesMet;
  numOfRulesMet = hasAtLeastOneNumber(password)
    ? numOfRulesMet + 1
    : numOfRulesMet;
  numOfRulesMet = hasAtLeastOneSpecialCharacter(password)
    ? numOfRulesMet + 1
    : numOfRulesMet;

  const strengthRating = getStrengthRating(numOfRulesMet);

  return strengthRating;
}

function hasRequiredLength(password) {
  const requiredLength = 8;
  return password.length >= requiredLength;
}

function hasUppercaseAndLowercase(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  return hasUppercase && hasLowercase;
}

function hasAtLeastOneNumber(password) {
  // Check for any digit [0-9]
  const hasNumber = /\d/.test(password);
  return hasNumber;
}

function hasAtLeastOneSpecialCharacter(password) {
  const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
  return hasSpecialCharacter;
}

function getStrengthRating(numOfRulesMet) {
  /**
   * @type {string}
   */
  let strengthRating;

  strengthRating =
    numOfRulesMet <= 1 ? "weak" : numOfRulesMet <= 3 ? "medium" : "strong";

  return strengthRating;
}
