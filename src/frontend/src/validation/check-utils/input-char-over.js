
/**
 * 入力上限の超過
 * @param {object} elementObject key: string, value: string
 * @param {object} inputRuleObject max {object} MAX: string, value: number
 * @returns {( function | undefined )} 
 * messageType.strMax {function} the function that returns message notice out of input range; otherwise undefined.
 * If the value that elementObject includes has too much characters,
 * this returns a function that returns message notice out of input range; otherwise undefined.
 **/

function inputOverCheck (elementObject, inputRuleObject) {
  const [key, value] = Object.entries(elementObject)[0];
  const max = inputRuleObject["MAX"];

  if (value.length > max) return messageType.strMax(key, max);
}