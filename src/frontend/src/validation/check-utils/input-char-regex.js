
/**
 * 正規表現内の入力可能文字
 * @param {object} elementObject key: string, value: string
 * @param {object} inputRuleObject
 * regexp {object} REGEXP: string, value: object
 * @returns {( function | undefined )} 
 * messageType.strRegex {function} the function that returns message notice out of regex literal rule; otherwise undefined.
 * If the value that elementObject includes has a specific character/ some specific characters,
 * this returns a function that returns message notice out of regex literal rule; otherwise undefined.
 * Characters' specifics depend on each inputRuleObject.
 **/

function inputRegexCheck (elementObject, inputRuleObject) {
  const [key, value] = Object.entries(elementObject)[0];
  const regexp = inputRuleObject["REGEXP"];

  if (!regexp.test(value)) return messageType.strRegex(key);
}