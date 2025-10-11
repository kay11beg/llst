
/**
 * 必須入力
 * @param {object} elementObject key: string, value: string
 * @returns {( function | undefined )} 
 * messageType.strNullBlank {function} the function that returns message notice of null/blank; otherwise undefined.
 * If the value that elementObject includes has no characters,
 * this returns a function that returns message notice of null/blank; otherwise undefined.
 * the values that contains only null/blank are evaluated as falsy.
 **/

function inputRequiredCheck (elementObject) {
  const [key, value] = Object.entries(elementObject)[0];

  if (!value) return messageType.strNullBlank(key);
}