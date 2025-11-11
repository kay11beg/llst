/**
 * 型判定テストモジュール
 * @param {any} value
 * @returns {any} baseType 
 * This is a test module to judge the base type of value,
 * which specification depends on "typeof" operator, and returns following value.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * 
 * And also the module does not take certain cases into consideration such as class, constructor.
 **/

export const getBaseType = (value) => {
  if(value === null) return "null";

  const baseType = typeof value;

  if(baseType === "object") return Object.prototype.toString.call(value)
      .slice(8, -1).toLowerCase();
  return baseType;
};