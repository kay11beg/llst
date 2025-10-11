
/**
 * 入力文字数の範囲
 * @param {object} elementObject key: string, value: string
 * @param {object} inputRuleObject
 * min {object} MIN: string, value: number, max {object} MAX: string, value: number
 * @returns {( function | undefined )} 
 * messageType.strRange {function} the function that returns message notice out of input range; otherwise undefined.
 * If the value that elementObject includes has over range of characters,
 * this returns a function that returns message notice out of input range; otherwise undefined.
 **/

function inputRangeCheck (elementObject, inputRuleObject) {
  const [key, value] = Object.entries(elementObject)[0];
  const min = inputRuleObject["MIN"];
  const max = inputRuleObject["MAX"];

  if (value.length < min || value.length > max) return messageType.strRange(key, min, max);
}