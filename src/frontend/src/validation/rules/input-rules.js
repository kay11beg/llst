
/**
 * バリデーション項目ルール：最小値 / 最大値 / 使用可能文字列パターン
 **/

const inputRules = {

    email: {
        MAX: 254,
        REGEXP: /^(?![-\._].*)(?!.*[-\._]{2,})(?!.*[-\._]+@)[\w-\.]+@[a-zA-Z0-9-\.]+\.[a-zA-Z]{2,}$/
    },

    password: {
        MIN: 8,
        MAX: 20,
        REGEXP: /^[\w!-\/:;=\?@\[\]\^\{\}~]+$/
    },

    themeName: {
        MIN: 1,
        MAX: 50,
        REGEXP: /(?!^[-_])[^!-,\.\/:-@\[-\^`\{-~\n\u0020\u{D800}-\u{DFFF}\uFF61-\uFF9F]/gu
    },

    themeText: {
        MAX: 3000,
        REGEXP: /[^\u{D800}-\u{DFFF}\uFF61-\uFF9F]/gu
    },

    urlKey: {
        MIN: 1,
        MAX: 50,
        REGEXP: /(?!^[-_])[^!-,\.\/:-@\[-\^`\{-~\n\u0020\u{D800}-\u{DFFF}\uFF61-\uFF9F]/gu
    },

    urlValue: {
        MIN: 12,
        MAX: 255,
        REGEXP: /^(?!https?:\/\/[-\.].*)https?:\/\/[a-zA-Z0-9-\.]+\.[a-zA-Z]{2,}(\/[\w!\$-\.:;=@\[\]~]*)*((\?|#)[\w!\$-\.:;=@\[\]~]+)*$/
    }
};