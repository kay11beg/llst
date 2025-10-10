
/**
 * メッセージ情報の表示
 * @param {object} errorElementNode Node
 * @param {string[]} messageList List of message string
 * the function that converts messageList into a message that informs requirements to meet
 * and add textContent value.
 **/

function messageResponse(errorElementNode, messageList) {
  const SEPARATE_CHAR = "/";
  const SEPARATE_LOC_NUM = 1;

  if (messageList != null) {
    const separateStr = messageList.length > SEPARATE_LOC_NUM ? SEPARATE_CHAR : "";

    errorElementNode.textContent = messageList.join(separateStr);
  } else {
    errorElementNode.textContent = "";
  }
}