"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomUtils = /** @class */ (function () {
    function RandomUtils() {
    }
    /**
     * 生成十六进制字符串
     * @param  length 返回的字符串长度
     * @return       字符范围在 '0123456789ABCDEF' 内得随机字符串
     */
    RandomUtils.prototype.randomHexadecimal = function (length) {
        length = length || 32;
        var possible = '0123456789ABCDEF';
        var text = '';
        for (var i = 0; i < length; i++) {
            // 十六进制拼接
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    return RandomUtils;
}());
exports.default = RandomUtils;
