
/**
 * テーマ追加/更新メイン処理
 * @param {string} formName the target form name to validate each form component.
 * @returns {boolean} isPassed the result to implement validation methods.
 * Default value is "true," however the value changes when any validation method returns "false."
 */

function isThemeInputValidated(formName) {
  const form = document.forms[formName];
  const themeNameNode = form.querySelector("#themeName");
  const themeTextNode = form.querySelector("#themeText");
  const isUrlCheckedNode = form.querySelector("#isUrlChecked");
  const urlKeyNodeList = form.querySelectorAll('[id^="urlKey"]:not([id*="error"])');
  const urlValueNodeList = form.querySelectorAll('[id^="urlValue"]:not([id*="error"])');
  const errorThemeNameNode = form.querySelector("#errorThemeName");
  const errorThemeTextNode = form.querySelector("#errorThemeText");
  const errorIsUrlCheckedNode = form.querySelector("#errorIsUrlChecked");
  const errorUrlKeyNodeList = form.querySelectorAll('[id^="errorUrlKey"]');
  const errorUrlValueNodeList = form.querySelectorAll('[id^="errorUrlValue"]');
  const MAX_URLNODELIST_LENGTH = 5;
  let isPassed = true;

  if (!themeNameNode
      || !themeTextNode
      || !isUrlCheckedNode
      || urlKeyNodeList.length !== MAX_URLNODELIST_LENGTH
      || urlValueNodeList.length !== MAX_URLNODELIST_LENGTH
      || !errorThemeNameNode
      || !errorThemeTextNode
      || !errorIsUrlCheckedNode
      || errorUrlKeyNodeList.length !== MAX_URLNODELIST_LENGTH
      || errorUrlValueNodeList.length !== MAX_URLNODELIST_LENGTH) {
    alert(messageType.falsified());
    return false;
  }

  const themeName = validateObjectCreate (elementObject[themeName], themeNameNode);
  const themeText = validateObjectCreate (elementObject[themeText], themeTextNode);

  messageResponse(errorThemeNameNode, validateMethodCompose(themeName, themeNameNode.id));
  isPassed = invalidCssResponse(themeNameNode, errorThemeNameNode) && isPassed;

  messageResponse(errorThemeTextNode, validateMethodCompose(themeText, themeTextNode.id));
  isPassed = invalidCssResponse(themeTextNode, errorThemeTextNode) && isPassed;

  for (let keyIndex = 0; keyIndex < urlKeyNodeList.length; keyIndex++) {
    const itemNum = keyIndex + 1;
    const urlKeyNode = urlKeyNodeList.item(keyIndex);
    const urlValueNode = urlValueNodeList.item(keyIndex);
    const errorUrlKeyNode = errorUrlKeyNodeList.item(keyIndex);
    const errorUrlValueNode = errorUrlValueNodeList.item(keyIndex);

    if (urlKeyNode.id !== `urlKey${itemNum}`
        || urlValueNode.id !== `urlValue${itemNum}`
        || errorUrlKeyNode.id !== `errorUrlKey${itemNum}`
        || errorUrlValueNode.id !== `errorUrlValue${itemNum}`) {
      alert(messageType.falsified());
      return false;
    }

    const urlKey = validateObjectCreate(elementObject[`urlKey${itemNum}`], urlKeyNode);
    const urlValue = validateObjectCreate(elementObject[`urlValue${itemNum}`], urlValueNode);

    if (isUrlCheckedNode.checked) {
      if ((urlKeyNode.value != null && urlValueNode.value == null)
          || (urlKeyNode.value == null && urlValueNode.value != null)) {
        messageResponse(errorUrlKeyNode, Array.of(inputRequiredCheck(urlKey)));
        messageResponse(errorUrlValueNode, Array.of(inputRequiredCheck(urlValue)));

      } else if (urlKeyNode.value != null && urlValueNode.value != null) {
        messageResponse(errorUrlKeyNode, validateMethodCompose(urlKey, urlKeyNode.id));
        messageResponse(errorUrlValueNode, validateMethodCompose(urlValue, urlValueNode.id));
      }
        isPassed = invalidCssResponse(urlKeyNode, errorUrlKeyNode) && isPassed;
        isPassed = invalidCssResponse(urlValueNode, errorUrlValueNode) && isPassed;

    } else {
      if (urlKeyNode.value != null || urlValueNode.value != null) {
        messageResponse(errorIsUrlCheckedNode, Array.of(messageType.missingCheck()));
        isPassed = invalidCssResponse(isUrlCheckedNode, errorIsUrlCheckedNode) && isPassed;
      }
    }
  }
  return isPassed;
}