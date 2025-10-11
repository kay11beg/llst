
/**
 * URL文字列の同記号文字列の連続使用
 * @param {object} elementObject key: string, value: string
 * @returns {( function | undefined )} 
 * messageType.urlUnsafeQueue {function} the function that returns message notice
 * of unacceptable queue of characters; otherwise undefined.
 * If the value that elementObject includes has specific special characters repeated more than one,
 * this returns a function that returns message notice of unacceptable queue of characters; otherwise undefined.
 * To prevent a possibly damaging remote operation or misoperating, as regards validationCharList,
 * each list item is prepared in a customized way with consideration to URI construction rules.
 * 
 * @see RFC3986 https://datatracker.ietf.org/doc/html/rfc3986
 **/

function urlUnsafeQueueCheck(elementObject) {
  const [key, value] = Object.entries(elementObject)[0];
  const ESCAPE_STR = "\\";
  const validationCharList = ["\.",",","\/","\?","#","\[","\]","@","!","\$","%","&","'","\(","\)","\*","\+",":",";","=","-","_","~"];

  for (let charIndex = 0; charIndex < validationCharList.length; charIndex) {
    let validationChar = validationCharList.item(charIndex);

    if (validationChar.includes(ESCAPE_STR)) validationChar = ESCAPE_STR + validationChar;

    const regexp = new RegExp("https\?:\\/\\/\.\*" + validationChar +"\{2,\}");
    if (!regexp.test(value)) return messageType.urlUnsafeQueue(key);
  }
}