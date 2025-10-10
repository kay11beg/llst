
/**
 * バリデーション結果のHTML表示管理
 * @param {object} elementNode Node
 * @param {object} errorElementNode Node
 * @returns {boolean} the function that manages validation display logics and returns boolean result.
 **/

function invalidCssResponse(elementNode, errorElementNode) {
  const INVALID_CSS = "is-invalid";

  if (!errorElementNode.value) {
    if (elementNode.classList.contains(INVALID_CSS)) elementNode.classList.remove(INVALID_CSS);
    return true;
  } else {
    if (!elementNode.classList.contains(INVALID_CSS)) elementNode.classList.add(INVALID_CSS);
    return false;
  }
}