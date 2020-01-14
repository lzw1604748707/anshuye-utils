export default class RandomUtils {
  /**
   * 生成十六进制字符串
   * @param  length 返回的字符串长度
   * @return       字符范围在 '0123456789ABCDEF' 内得随机字符串
   */
  public randomHexadecimal(length?: number): string {
    length = length || 32
    const possible = '0123456789ABCDEF'
    let text = ''
    for (let i = 0; i < length; i++) {
      // 十六进制拼接
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
}
