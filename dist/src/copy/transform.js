"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransformUtils = /** @class */ (function () {
    function TransformUtils() {
    }
    /**
     * 将数字转化为大写字母并返回
     * @param {number} n 数字
     */
    TransformUtils.prototype.numberToUppercaseLetter = function (nubmer) {
        return String.fromCharCode(0x40 + 1 + nubmer);
    };
    /**
     * 将数字转化为文字 如果是转化为星期几 则 传入 'weekday'
     * @param num
     * @param type
     */
    TransformUtils.prototype.convertToChinese = function (num, type) {
        var N = [];
        if (type === 'weekday') {
            N = ['日', '一', '二', '三', '四', '五', '六', '日'];
        }
        else {
            N = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        }
        var cNum = [];
        var strList = num.toString().split('');
        strList.forEach(function (str) {
            cNum.push(N[str]);
        });
        return cNum.join('');
    };
    /*
     * 根据输入的数字奇偶性判断性别，奇数为男，偶数为女
     * @param num
     * @param type
     */
    TransformUtils.prototype.numToSex = function (number) {
        return number % 2
            ? { sex: number, sexCh: '男', isMan: true }
            : { sex: number, sexCh: '女', isMan: false };
    };
    return TransformUtils;
}());
exports.default = TransformUtils;
