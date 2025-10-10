
/**
 * フォーム入力チェックのイベント管理 
 * TODO: 利用規約フォームにおけるバリデーション追加と共に変更
 * TODO: try-catch責務における改善をcontroller-service間で検討
 **/

document.addEventListener("submit", (event) => {

	"use strict";

    const selectFormName = document.forms[0].name;
    let isValidated;

    try {
        if(selectFormName === "userLogin" | selectFormName === "userRegister") {
            isValidated = isUserInputValidated(selectFormName);
        }
        if(selectFormName === "themeCreate" | selectFormName === "themeUpdate") {
            isValidated = isThemeInputValidated(selectFormName);
        }
    } catch(e) {
        event.preventDefault();
        return false;
    }

    if(!isValidated) {
        event.preventDefault();
        return false;
    }
});