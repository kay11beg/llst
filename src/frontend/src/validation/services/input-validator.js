
/**
 * メインバリデーション
 * validationロジックの変更時以下メソッドの開発保守又新規メソッド追加
 * @method defaultValidate the method that implements validation logic along with methodRuleList
 * @param {object} elementObject the object that has each form element key and value.
 * @param {object} inpuRuleObject the object that has input validation rules in each form element.
 * @param {object} methodRuleList the object that has validation method lists in each form element.
 * @returns {string[]} messages that has validation results.
 **/

const validationImpl = {

    defaultValidate(elementObject, inputRuleObject, methodRuleList) {
      const messages = [];
      const urgentNoticeFuncList = [inputRequiredCheck, passwordCharCheck, urlUnsafeQueueCheck];
      let result;

      for (const func of methodRuleList) {
        if (urgentNoticeFuncList.includes(func.name)) {
          result = func(elementObject)
          if (result != null) return messages.push(result);

        } else {
          result = func(elementObject, inputRuleObject);
          if (result != null) messages.push(result);
        }
      }
      return messages;
    }
};