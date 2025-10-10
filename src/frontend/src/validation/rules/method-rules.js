
/**
 * バリデーション関数リスト
 **/

const methodRules = {
    email: [inputRequiredCheck, inputOverCheck, inputRegexCheck],
    password: [inputRequiredCheck, inputRangeCheck, passwordCharCheck, inputRegexCheck],
    themeName: [inputRequiredCheck, inputRangeCheck, inputRegexCheck],
    themeText: [inputOverCheck, inputRegexCheck], //not required
    urlKey: [inputRangeCheck, inputRegexCheck], //条件付きrequired
    urlValue: [inputRangeCheck, inputRegexCheck, urlUnsafeQueueCheck] //条件付きrequired
};