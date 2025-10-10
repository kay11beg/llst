
/**
 * collapse制御を行うcheckboxのイベント管理
 **/

document.addEventListener("DOMContentLoaded", () => {

  const isUrlChecked = document.getElementById("isUrlChecked");
  const target = document.getElementById("collapseInputText");
  const bsCollapse = new bootstrap.Collapse(target, {toggle: false});

  if (isUrlChecked.checked) {
    bsCollapse.show();
  } else {
    bsCollapse.hide();
  }

  /* 画面初期表示以外はbootstrap標準機能で対応 */

});

/**
 * textboxの入力管理 
 **/

document.addEventListener("input", () => {

  const charCount = document.getElementById("charCount");
  const counter = document.querySelector(".counter");
  const currentLength = document.getElementById("themeText").value.length;
  const MAX_CHARS = 3000; // 入力最大値

  charCount.textContent = currentLength;

  if (currentLength > MAX_CHARS) {
    counter.classList.add("text-danger");
  } else if (currentLength <= MAX_CHARS) {
    counter.classList.remove("text-danger");
  }
});