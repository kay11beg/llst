
/**
 * バリデーションオブジェクトの構成
 * @param {object} elementObject key: string, value: string
 * @param {object} elementNode Node
 * @returns {function} the function that returns object.
 * validationObject contains form element name key and its input value.
 **/

function validateObjectCreate (elementObject, elementNode) {
  const key = Object.keys(elementObject)[0];
  const validationObject = Object.assign({}, elementObject);

  validationObject[key] = elementNode.value;
  return validationObject;
}