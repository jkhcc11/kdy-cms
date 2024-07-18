export function escapeHtml(str: string) {
  let temp = '';
  if (str.length === 0) return '';
  temp = str.replace(/&amp;/g, '&');
  temp = temp.replace(/&lt;/g, '<');
  temp = temp.replace(/&gt;/g, '>');
  temp = temp.replace(/&nbsp;/g, ' ');
  temp = temp.replace(/&#39;/g, "'");
  temp = temp.replace(/&quot;/g, '"');
  return temp;
}

export function isArray(str: unknown) {
  return Object.prototype.toString.call(str) === '[object Array]';
}

/**
 * 使用正则表达式替换掉所有非字母数字汉字的字符
 * @param str 待处理字符串
 * @returns
 */
export function RemoveSpecialCharacters(str: string) {
  // 构建正则表达式，移除非中文字符以及“国语”和“粤语”
  const regex = /[^\u4E00-\u9FA5]|国语|粤语/g;
  return str.replace(regex, '');
}
