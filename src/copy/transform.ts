export default class TransformUtils {
  /**
   * 将数字转化为大写字母并返回
   * @param {number} n 数字
   */
  public numberToUppercaseLetter(nubmer: number): string {
    return String.fromCharCode(0x40 + 1 + nubmer)
  }

  /**
   * 将数字转化为文字 如果是转化为星期几 则 传入 'weekday'
   * @param num
   * @param type
   */
  public convertToChinese(num: string | number, type?: 'weekday'): string {
    let N: string[] = []
    if (type === 'weekday') {
      N = ['日', '一', '二', '三', '四', '五', '六', '日']
    } else {
      N = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    }
    let cNum: string[] = []
    let strList: string[] = num.toString().split('')
    strList.forEach(str => {
      cNum.push(N[(str as unknown) as number])
    })
    return cNum.join('')
  }
  /*
   * 根据输入的数字奇偶性判断性别，奇数为男，偶数为女
   * @param num
   * @param type
   */
  public numToSex(number: number): object {
    return number % 2
      ? {sex: number, sexCh: '男', isMan: true}
      : {sex: number, sexCh: '女', isMan: false}
  }
}
