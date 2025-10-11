
/**
 * パスワード必須使用文字種
 * @param {object} elementObject key: string, value: string
 * @returns {( function | undefined )} 
 * messageType.strPasswordChar {function} the function that returns message notice out of required password character rules;
 * otherwise undefined. If the value that elementObject includes has a character/ characters that does not exist in input rules,
 * or the value does not meet required usage of password characters,
 * this returns a function that returns message notice out of password character rules; otherwise undefined.
 **/

function passwordCharCheck (elementObject) {
  const [key, value] = Object.entries(elementObject)[0];
  const inputRequiredCharList = [/.*[a-z]/, /.*[A-Z]/, /.*[0-9]/, /.*[!-\/:;=\?@\[\]\^_\{\}~]/];
  const REQUIRED_USE_NUM = 3;
  let useNum = 0;

  for (const inputRequiredChar of inputRequiredCharList) {
    if (inputRequiredChar.test(value)) useNum += 1;
  }
  if (useNum < REQUIRED_USE_NUM) return messageType.strPasswordChar(key);
}