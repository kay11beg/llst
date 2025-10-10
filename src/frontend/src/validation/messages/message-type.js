
/**
 * message通知イベント
 * @param {object} fieldName Node, field of server side
 * @param {number} min minimum value of input rule
 * @param {number} max maximum value of input rule
 * @returns {string} message notice that client needs to do more action for input behaviours
 * , of results of each validation method.
 */

const messageType = {

  /* // Error:イベント概要 messageMethod() {}, */

  // TypeError:内容改ざん
  falsified() {
    return "内部エラーが発生しました。ページの再読込を行ってください。"
  },

  // TypeError(Not Nullable):空入力
  strNullBlank(fieldName) {
    return `${fieldName}は必須入力です。${fieldName}の入力を行ってください。`;
  },

  // RangeError:最大入力文字数
  strMax(fieldName, max) {
    return `${fieldName}の入力文字数が超過しています。${max}文字以下で入力を行ってください。`;
  },

  // RangeError:入力文字数範囲
  strRange(fieldName, min, max) {
    return `${fieldName}の入力文字数が入力範囲外です。${min}文字以上${max}文字以内で入力を行ってください。`;
  },

  // RangeError:使用不可文字列の入力
  strRegex(fieldName) {
    return `${fieldName}の入力内容に使用不可能な文字列が含まれています。入力内容を再検討してください。`;
  },

  // CustomError:password使用文字が３種類以下
  strPasswordChar(fieldName) {
    return `${fieldName}には、全て半角入力かつ数字、大小のアルファベット英字、記号の中から３種類以上使用してください。`;
  },

  // CustomError:urlValue内で同記号文字の連続使用
  urlUnsafeQueue(fieldName) {
    return `${fieldName}の入力URL文字列に記載誤り又は危険性のある内容が含まれています。入力内容を再度ご確認ください。`;
  },

  // CustomError:urlCheckboxをonにせずURL情報を入力
  missingCheck() {
    return "以下のURL情報を入力する場合は、URL情報の入力を許可してください。"
  }
};