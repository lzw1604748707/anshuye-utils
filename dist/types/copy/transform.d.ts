export default class TransformUtils {
    /**
     * 将数字转化为大写字母并返回
     * @param {number} n 数字
     */
    numberToUppercaseLetter(nubmer: number): string;
    /**
     * 将数字转化为文字 如果是转化为星期几 则 传入 'weekday'
     * @param num
     * @param type
     */
    convertToChinese(num: string | number, type?: 'weekday'): string;
    numToSex(number: number): object;
}
