
/**
 * バリデーションメソッド構築
 * @param {object} elementObject key: string, value: string
 * @param {string} elementId Node.id
 * @returns {function} 
 * validationImpl.defaultValidate {function} the function that implements validation logics and returns messageList.
 * elementObject {object} the object that has each form element key and value.
 * inputRules {object} the object that has input validation rules in each form element.
 * methodRules {object} the object that has validation method lists in each form element.
 **/

function validateMethodCompose(elementObject, elementId) {
  const URL_KEY_STR = "urlKey";
  const URL_VALUE_STR = "urlValue";
  let elemName = "";

  if (elementId.includes(URL_KEY_STR)) {
    elemName =  URL_KEY_STR;
  } else if (elementId.includes(URL_VALUE_STR)) {
    elemName =  URL_VALUE_STR;
  } else {
    elemName =  elementId;
  }
  return validationImpl.defaultValidate(
        elementObject,
        inputRules[elemName],
        methodRules[elemName]
  );
}